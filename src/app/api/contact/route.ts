import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are all required." },
      { status: 400 }
    );
  }

  const { error } = await supabase
    .from("contact_submissions")
    .insert({ name, email, message });

  if (error) {
    return NextResponse.json(
      { error: "Something went wrong submitting your message. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
