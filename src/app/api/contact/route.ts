import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@<>,;]+@[^\s@<>,;]+\.[^\s@<>,;]+$/;

function field(body: Record<string, unknown> | null, key: string, max: number) {
  const value = body?.[key];
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;

  // Hidden spam-trap field: real visitors never see or fill it, bots usually do.
  // Pretend success so bots get no signal, but send nothing.
  if (field(body, "website", 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = field(body, "name", 100);
  const email = field(body, "email", 200);
  const message = field(body, "message", 5000);
  const subject = field(body, "subject", 100).replace(/[\r\n]+/g, " ");

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are all required." },
      { status: 400 }
    );
  }
  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const scriptUrl = process.env.CONTACT_SCRIPT_URL;
  const secret = process.env.CONTACT_SECRET;
  if (!scriptUrl || !secret) {
    return NextResponse.json(
      { error: "Messaging is temporarily unavailable. Please email Joe directly." },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ secret, name, email, subject, message }),
      redirect: "follow",
      signal: AbortSignal.timeout(20000),
    });
    const result = (await res.json().catch(() => null)) as { ok?: boolean } | null;
    if (!res.ok || !result?.ok) throw new Error("mail script rejected the message");
  } catch {
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again, or email Joe directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
