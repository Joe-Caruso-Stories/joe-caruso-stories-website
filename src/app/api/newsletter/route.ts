import { NextResponse } from "next/server";

const KIT_FORM_ID = "2538283";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  const email = typeof body?.email === "string" ? body.email.trim() : "";

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.KIT_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Newsletter signup is temporarily unavailable. Please try again later." },
      { status: 500 }
    );
  }

  const referrer = request.headers.get("referer") ?? undefined;

  // Kit's "add subscriber to form by email" endpoint 404s (broken/unsupported
  // for this form), so this creates the subscriber first, then attaches them
  // to the form by ID — the combination that actually works.
  const createResponse = await fetch("https://api.kit.com/v4/subscribers", {
    method: "POST",
    headers: {
      "X-Kit-Api-Key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email_address: email, referrer }),
  });

  if (!createResponse.ok) {
    return NextResponse.json(
      { error: "Something went wrong subscribing you. Please try again." },
      { status: 502 }
    );
  }

  const { subscriber } = (await createResponse.json()) as {
    subscriber: { id: number };
  };

  const attachResponse = await fetch(
    `https://api.kit.com/v4/forms/${KIT_FORM_ID}/subscribers/${subscriber.id}`,
    {
      method: "POST",
      headers: {
        "X-Kit-Api-Key": apiKey,
        "Content-Type": "application/json",
      },
    }
  );

  if (!attachResponse.ok) {
    return NextResponse.json(
      { error: "Something went wrong subscribing you. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
