import { NextResponse } from "next/server";

type BookingPayload = {
  name?: string;
  email?: string;
  experience?: string;
  format?: string;
  goals?: string;
};

export async function POST(request: Request) {
  let body: BookingPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const experience = body.experience?.trim();
  const format = body.format?.trim();
  const goals = body.goals?.trim();

  if (!name || !email || !experience || !format || !goals) {
    return NextResponse.json(
      { error: "Please complete all fields." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email." },
      { status: 400 },
    );
  }

  // Local/mock success — connect to email, CRM, or calendar later.
  console.info("[booking-request]", {
    name,
    email,
    experience,
    format,
    goals,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
