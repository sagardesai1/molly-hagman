"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type FormState = "idle" | "submitting" | "success" | "error";

export function BookingForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setError("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setError(
        err instanceof Error
          ? err.message
          : "Unable to send your request right now.",
      );
    }
  }

  if (state === "success") {
    return (
      <div
        className="rounded-none border border-champagne/30 bg-secondary/60 px-6 py-10 text-center"
        role="status"
        aria-live="polite"
      >
        <p className="font-display text-3xl text-champagne italic sm:text-4xl">
          Request received
        </p>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground leading-relaxed">
          Thank you — Molly will follow up shortly to confirm your private
          lesson details in NYC or online.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-8 border-champagne/40 bg-transparent text-foreground hover:bg-champagne/10"
          onClick={() => setState("idle")}
        >
          Send another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className="h-11 rounded-none border-border bg-ink/40"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@email.com"
            className="h-11 rounded-none border-border bg-ink/40"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="experience">Experience level</Label>
          <select
            id="experience"
            name="experience"
            required
            defaultValue=""
            className="flex h-11 w-full rounded-none border border-input bg-ink/40 px-3 text-sm text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
          >
            <option value="" disabled>
              Select level
            </option>
            <option value="beginner">Complete beginner</option>
            <option value="social">Some social dancing</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced / performance</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="format">Lesson format</Label>
          <select
            id="format"
            name="format"
            required
            defaultValue=""
            className="flex h-11 w-full rounded-none border border-input bg-ink/40 px-3 text-sm text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
          >
            <option value="" disabled>
              Select format
            </option>
            <option value="nyc">In person — New York City</option>
            <option value="online">Online</option>
            <option value="either">Either works</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="goals">What do you want to work on?</Label>
        <Textarea
          id="goals"
          name="goals"
          required
          rows={4}
          placeholder="Technique, musicality, partnering, wedding dance, performance prep…"
          className="rounded-none border-border bg-ink/40"
        />
      </div>

      {state === "error" ? (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={state === "submitting"}
        className="h-12 w-full rounded-none bg-ember text-primary-foreground hover:bg-ember/90 animate-pulse-glow sm:w-auto sm:min-w-56"
      >
        {state === "submitting" ? "Sending…" : "Request your lesson"}
      </Button>
    </form>
  );
}
