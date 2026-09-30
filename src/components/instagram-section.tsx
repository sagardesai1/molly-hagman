"use client";

import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Public reels already featured on mollyhagman.com */
const reels = [
  {
    id: "DDIGnHvyMg-",
    label: "Performance reel",
  },
  {
    id: "DDAtZHyBfiF",
    label: "Stage energy",
  },
  {
    id: "DC91Tp2x-Uw",
    label: "Partner work",
  },
] as const;

export function InstagramSection() {
  return (
    <section
      id="watch"
      className="border-y border-border bg-ink"
      aria-labelledby="watch-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="text-xs tracking-[0.28em] text-champagne uppercase">
            On Instagram
          </p>
          <h2
            id="watch-heading"
            className="mt-4 max-w-2xl font-display text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl"
          >
            See the fire before you book the floor.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Watch Molly teach, perform, and light up the stage — then reserve a
            private lesson to build that same confidence yourself.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reels.map((reel, index) => (
            <Reveal key={reel.id} delay={index * 90}>
              <figure>
                <div className="relative aspect-[9/16] overflow-hidden border border-border/70 bg-secondary/50">
                  <iframe
                    title={`Instagram reel — ${reel.label}`}
                    src={`https://www.instagram.com/reel/${reel.id}/embed`}
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <figcaption className="mt-3 flex items-center justify-between gap-3 text-sm">
                  <span className="text-muted-foreground">{reel.label}</span>
                  <a
                    href={`https://www.instagram.com/reel/${reel.id}/`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-champagne underline-offset-4 hover:text-blush hover:underline"
                  >
                    Open on Instagram
                  </a>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              More classes, congresses, and performances at{" "}
              <a
                href="https://www.instagram.com/molly_hagman/"
                target="_blank"
                rel="noreferrer"
                className="text-blush underline-offset-4 hover:underline"
              >
                @molly_hagman
              </a>
            </p>
            <a
              href="#book"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 rounded-none bg-ember px-7 text-primary-foreground hover:bg-ember/90",
              )}
            >
              Book a private lesson
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
