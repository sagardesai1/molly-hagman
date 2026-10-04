import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Custom reel cards (not Instagram iframes).
 * Instagram embeds are cross-origin — we can’t hide likes/comments inside them.
 * These posters open the reel on Instagram in a new tab.
 *
 * Use plain <img> (not next/image) so posters don’t depend on the image optimizer.
 */
const reels = [
  {
    id: "DDIGnHvyMg-",
    label: "Performance reel",
    poster: "/images/reels/performance.jpg",
  },
  {
    id: "DDAtZHyBfiF",
    label: "Stage energy",
    poster: "/images/reels/stage.jpg",
  },
  {
    id: "DC91Tp2x-Uw",
    label: "Partner work",
    poster: "/images/reels/partner.jpg",
  },
  {
    id: "DC2MLc2hggi",
    label: "Solo styling",
    poster: "/images/reels/solo.jpg",
  },
] as const;

function PlayIcon() {
  return (
    <span
      className="flex size-12 items-center justify-center rounded-full bg-ember/95 text-primary-foreground shadow-[0_0_0_1px_rgb(247_239_232_/_20%)] transition-transform duration-300 group-hover:scale-105 group-focus-visible:scale-105 sm:size-14"
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="ml-0.5 size-5 fill-current sm:size-6">
        <path d="M8 5.14v13.72L19 12 8 5.14z" />
      </svg>
    </span>
  );
}

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

        <div className="mt-12 grid justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {reels.map((reel, index) => (
            <Reveal
              key={reel.id}
              delay={index * 80}
              className="w-full max-w-[220px] sm:max-w-[240px]"
            >
              <figure className="w-full">
                <a
                  href={`https://www.instagram.com/reel/${reel.id}/`}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block aspect-[9/16] overflow-hidden border border-border/70 bg-secondary/50 outline-none focus-visible:ring-2 focus-visible:ring-ember"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={reel.poster}
                    alt={`${reel.label} — Molly Hagman on Instagram`}
                    width={720}
                    height={1280}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-ink/25" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <PlayIcon />
                  </span>
                  <span className="absolute inset-x-0 bottom-0 p-4 text-sm tracking-[0.14em] text-foreground/90 uppercase">
                    Watch on Instagram
                  </span>
                </a>
                <figcaption className="mt-3 text-sm text-muted-foreground">
                  {reel.label}
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
