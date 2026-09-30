import { writeFileSync, mkdirSync, existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public/images/reels");
const dir = join(outDir, "_b64");

const REMOTE = {
  partner: "https://litter.catbox.moe/8hh27a.jpg",
  performance: "https://litter.catbox.moe/98oxto.jpg",
  solo: "https://litter.catbox.moe/35qsi2.jpg",
  stage: "https://litter.catbox.moe/7hko7s.jpg",
};

const EXPECTED = {
  partner: 84715,
  performance: 109097,
  solo: 114651,
  stage: 127413,
};

mkdirSync(outDir, { recursive: true });

async function fetchRemote(name) {
  const res = await fetch(REMOTE[name]);
  if (!res.ok) throw new Error(`fetch ${name}: HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length !== EXPECTED[name]) {
    throw new Error(`${name}: expected ${EXPECTED[name]} bytes, got ${buf.length}`);
  }
  return buf;
}

function decodeLocal(name) {
  const half0 = join(dir, `${name}.full.0.b64.txt`);
  const half1 = join(dir, `${name}.full.1.b64.txt`);
  const fullPath = join(dir, `${name}.full.b64.txt`);
  const manifestPath = existsSync(join(dir, "manifest.full.json"))
    ? join(dir, "manifest.full.json")
    : join(dir, "manifest.json");

  let b64;
  if (existsSync(half0) && existsSync(half1)) {
    b64 = (readFileSync(half0, "utf8") + readFileSync(half1, "utf8")).replace(/\s+/g, "");
  } else if (existsSync(fullPath)) {
    b64 = readFileSync(fullPath, "utf8").replace(/\s+/g, "");
  } else if (existsSync(manifestPath)) {
    const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
    const item = manifest.find((m) => m.name === name);
    if (!item) throw new Error(`${name}: not in manifest`);
    b64 = item.parts.map((p) => readFileSync(join(dir, p), "utf8")).join("").replace(/\s+/g, "");
  } else {
    throw new Error(`${name}: no local decode sources`);
  }
  const buf = Buffer.from(b64, "base64");
  if (buf.length !== EXPECTED[name]) {
    throw new Error(`${name}: expected ${EXPECTED[name]} bytes, got ${buf.length}`);
  }
  return buf;
}

for (const name of Object.keys(EXPECTED)) {
  let buf;
  try {
    buf = await fetchRemote(name);
    console.log(`fetched ${name}.jpg (${buf.length} bytes)`);
  } catch (err) {
    console.warn(`remote fetch failed for ${name}: ${err.message}; trying local decode`);
    buf = decodeLocal(name);
    console.log(`decoded ${name}.jpg (${buf.length} bytes)`);
  }
  writeFileSync(join(outDir, `${name}.jpg`), buf);
}
