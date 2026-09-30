import { BookingForm } from "@/components/booking-form";
import { Reveal } from "@/components/reveal";
import { reviewStats } from "@/data/reviews";

export function HomeBook() {
  return (
        <section
          id="book"
          className="border-t border-border bg-gradient-to-b from-secondary/50 to-ink"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <Reveal>
              <p className="text-xs tracking-[0.28em] text-champagne uppercase">
                Book now
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
                Ready to dance with more fire?
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
                Request a private salsa or bachata lesson. Molly will reply with
                availability for New York City or online sessions.
              </p>
              <p className="mt-4 text-sm text-champagne/90">
                Join {reviewStats.superprof.count + reviewStats.google.count}+
                students who rated Molly 5.0 on Superprof and Google.
              </p>
              <div className="mt-8 space-y-2 text-sm text-muted-foreground">
                <p>Prefer Instagram? Message @molly_hagman</p>
                <p>
                  Full portfolio:{" "}
                  <a
                    href="https://www.mollyhagman.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blush underline-offset-4 hover:underline"
                  >
                    mollyhagman.com
                  </a>
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <BookingForm />
            </Reveal>
          </div>
        </section>
  );
}
