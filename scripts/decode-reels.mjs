import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dir = join(root, "public/images/reels/_b64");
const outDir = join(root, "public/images/reels");
const manifestPath = existsSync(join(dir, "manifest.full.json"))
  ? join(dir, "manifest.full.json")
  : join(dir, "manifest.json");
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));

mkdirSync(outDir, { recursive: true });
for (const item of manifest) {
  const b64 = item.parts.map((p) => readFileSync(join(dir, p), "utf8")).join("");
  const buf = Buffer.from(b64, "base64");
  if (buf.length !== item.size) {
    throw new Error(`${item.name}: expected ${item.size} bytes, got ${buf.length}`);
  }
  writeFileSync(join(outDir, `${item.name}.jpg`), buf);
  console.log(`decoded ${item.name}.jpg (${buf.length} bytes)`);
}
