"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error ?? "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-sand bg-peach/40 p-8 text-center">
        <p className="font-display text-xl font-semibold text-charcoal">
          Thanks for reaching out!
        </p>
        <p className="mt-2 font-sans text-taupe">
          Joe will get back to you as soon as he can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block font-sans text-sm font-medium text-charcoal"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-xl border border-sand bg-paper px-4 py-3 font-sans text-sm text-charcoal placeholder:text-taupe/70 focus:border-amber focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block font-sans text-sm font-medium text-charcoal"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-sand bg-paper px-4 py-3 font-sans text-sm text-charcoal placeholder:text-taupe/70 focus:border-amber focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block font-sans text-sm font-medium text-charcoal"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-xl border border-sand bg-paper px-4 py-3 font-sans text-sm text-charcoal placeholder:text-taupe/70 focus:border-amber focus:outline-none"
        />
      </div>

      {status === "error" && (
        <p className="font-sans text-sm text-clay">{errorMessage}</p>
      )}

      <Button type="submit" variant="primary" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
