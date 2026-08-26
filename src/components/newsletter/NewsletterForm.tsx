"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <p className="mt-5 font-sans text-[15px] font-semibold text-white">
        You&rsquo;re subscribed! Welcome to the Aim High Newsletter.
      </p>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-5 flex flex-wrap gap-2.5">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          aria-label="Email address"
          className="min-w-[180px] flex-1 rounded-full border-none bg-white px-5 py-3.5 font-sans text-[15px] text-charcoal focus:outline-none"
        />
        <Button type="submit" variant="primary" disabled={status === "loading"}>
          {status === "loading" ? "Subscribing…" : "Subscribe"}
        </Button>
      </form>
      {status === "error" && (
        <p className="mt-2.5 font-sans text-sm text-red-200">{errorMessage}</p>
      )}
      <p className="mt-3.5 font-sans text-xs text-[#a9c1dc]">
        Unsubscribe at any time. No spam, ever.
      </p>
    </>
  );
}
