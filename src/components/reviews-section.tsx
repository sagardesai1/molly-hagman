import { Reveal } from "@/components/reveal";
import { featuredReviews, reviewStats } from "@/data/reviews";

function Stars({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-champagne" aria-label={label}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className="size-3.5 fill-current"
          aria-hidden
        >
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.9l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}

export function ReviewsSection() {
  const totalReviews = reviewStats.google.count + reviewStats.superprof.count;

  return (
    <section
      id="reviews"
      className="border-y border-border bg-secondary/25"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="text-xs tracking-[0.28em] text-champagne uppercase">
            Student reviews
          </p>
          <h2
            id="reviews-heading"
            className="mt-4 max-w-3xl font-display text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl"
          >
            {totalReviews}+ dancers already trust Molly with their first steps —
            and their floor nights.
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 flex flex-col gap-6 border-y border-border py-8 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-10">
            <div>
              <p className="font-display text-5xl text-blush sm:text-6xl">5.0</p>
              <div className="mt-2 flex items-center gap-3">
                <Stars label="5 out of 5 stars" />
                <span className="text-sm text-muted-foreground">
                  Average across public platforms
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-sm sm:flex-row sm:gap-10">
              <a
                href={reviewStats.superprof.url}
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <p className="text-xs tracking-[0.2em] text-champagne uppercase">
                  Superprof
                </p>
                <p className="mt-1 text-lg text-foreground group-hover:text-blush">
                  {reviewStats.superprof.count} five-star reviews
                </p>
              </a>
              <a
                href={reviewStats.google.url}
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <p className="text-xs tracking-[0.2em] text-champagne uppercase">
                  Google
                </p>
                <p className="mt-1 text-lg text-foreground group-hover:text-blush">
                  {reviewStats.google.count} reviews
                </p>
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-x-14 md:gap-y-16">
          {featuredReviews.map((review, index) => (
            <Reveal key={`${review.name}-${index}`} delay={index * 70}>
              <figure className="flex h-full flex-col border-t border-ember/50 pt-6">
                <Stars label="5 star review" />
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-foreground/95 sm:text-xl">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm">
                  <span className="font-medium text-foreground">
                    {review.name}
                  </span>
                  <span className="text-muted-foreground">·</span>
                  <a
                    href={review.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-champagne underline-offset-4 hover:text-blush hover:underline"
                  >
                    {review.source}
                  </a>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-14 text-sm text-muted-foreground">
            Quotes are from Molly’s public{" "}
            <a
              href={reviewStats.superprof.url}
              target="_blank"
              rel="noreferrer"
              className="text-blush underline-offset-4 hover:underline"
            >
              Superprof
            </a>{" "}
            profile. See all ratings on{" "}
            <a
              href={reviewStats.google.url}
              target="_blank"
              rel="noreferrer"
              className="text-blush underline-offset-4 hover:underline"
            >
              Google
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
