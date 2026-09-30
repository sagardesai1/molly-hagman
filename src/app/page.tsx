import Image from "next/image";
import { BookingForm } from "@/components/booking-form";
import { InstagramSection } from "@/components/instagram-section";
import { Reveal } from "@/components/reveal";
import { ReviewsSection } from "@/components/reviews-section";
import { SiteHeader } from "@/components/site-header";
import { reviewStats } from "@/data/reviews";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const credentials = [
  "Head Instructor — Salsa Salsa Dance Studio, Brooklyn",
  "Former Principal — Yamuleé Dance Company",
  "Featured dancer — Thalía & Los Ángeles Azules",
  "Featured dancer — Yiyo Sarante concerts",
  "Broadway Dance Center graduate",
  "1st Place Professional Solo — Ultimate Dance Competition 2025",
];

const lessonPoints = [
  {
    title: "Technique that holds up on the floor",
    body: "Build clean fundamentals, timing, and body mechanics you can trust in real social dancing — not just in class.",
  },
  {
    title: "Musicality you can feel",
    body: "Learn to hear the clave, phrase breaks, and accents so your dancing looks intentional, not memorized.",
  },
  {
    title: "Confidence with a partner",
    body: "Whether you lead or follow, private coaching sharpens connection, styling, and the presence that turns heads.",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell Molly your goals",
    body: "Share your level, preferred format, and what you want to improve — wedding, social nights, or stage work.",
  },
  {
    number: "02",
    title: "Book NYC or online",
    body: "Train in person across New York City or connect online from anywhere with the same focused attention.",
  },
  {
    number: "03",
    title: "Leave each lesson better",
    body: "Walk out with clear drills, musical cues, and floor-ready skills you can use the same week.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />

      <main id="top">
        <section className="relative min-h-[100svh] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/dance-1.jpg"
              alt="Molly Hagman in a red salsa performance costume"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[78%_14%] animate-kenburns sm:object-[82%_10%] lg:object-[85%_8%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/82 to-ink/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/45" />
          </div>

          <div className="relative z-10 flex min-h-[100svh] items-end pb-16 pt-28 sm:items-center sm:pb-24 sm:pt-24">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
              <div className="max-w-xl">
                <p
                  className="animate-rise font-display text-5xl leading-none text-blush sm:text-7xl md:text-8xl"
                  style={{ animationDelay: "80ms" }}
                >
                  Molly Hagman
                </p>
                <h1
                  className="animate-rise mt-6 max-w-lg text-2xl font-medium leading-tight tracking-tight text-foreground sm:text-3xl md:text-4xl"
                  style={{ animationDelay: "220ms" }}
                >
                  Private salsa lessons that make you look — and feel —
                  unforgettable on the floor.
                </h1>
                <p
                  className="animate-rise mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
                  style={{ animationDelay: "360ms" }}
                >
                  NYC &amp; online coaching with a world-stage dancer who
                  teaches beginners and advanced students with equal precision.
                </p>
                <p
                  className="animate-rise mt-4 text-sm tracking-wide text-champagne/90"
                  style={{ animationDelay: "420ms" }}
                >
                  5.0 · {reviewStats.superprof.count} five-star Superprof
                  reviews · {reviewStats.google.count} Google reviews
                </p>
                <div
                  className="animate-rise mt-8 flex flex-wrap gap-3"
                  style={{ animationDelay: "500ms" }}
                >
                  <a
                    href="#book"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "h-12 rounded-none bg-ember px-7 text-primary-foreground hover:bg-ember/90 animate-pulse-glow",
                    )}
                  >
                    Book a private lesson
                  </a>
                  <a
                    href="#reviews"
                    className={cn(
                      buttonVariants({ size: "lg", variant: "outline" }),
                      "h-12 rounded-none border-champagne/35 bg-transparent text-foreground hover:bg-champagne/10",
                    )}
                  >
                    Read student reviews
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-label="Credentials"
          className="overflow-hidden border-y border-border bg-secondary/40 py-4"
        >
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap px-6 text-sm tracking-[0.18em] text-champagne/80 uppercase sm:text-xs">
            {[...credentials, ...credentials].map((item, index) => (
              <span key={`${item}-${index}`} className="flex items-center gap-10">
                <span>{item}</span>
                <span aria-hidden className="text-ember">
                  ◆
                </span>
              </span>
            ))}
          </div>
        </section>

        <section id="why" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <p className="text-xs tracking-[0.28em] text-champagne uppercase">
              Private lessons
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
              One-to-one coaching built for real dancers.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Personalized salsa and bachata lessons tailored to your level,
              goals, and learning style — available in New York City and online.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
            <Reveal delay={80}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/about.jpg"
                  alt="Molly Hagman leading a salsa class with dancers in the background"
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover object-center"
                />
              </div>
            </Reveal>

            <div className="space-y-10">
              {lessonPoints.map((point, index) => (
                <Reveal key={point.title} delay={120 + index * 90}>
                  <div className="border-l border-ember/70 pl-5">
                    <h3 className="text-xl font-medium text-foreground sm:text-2xl">
                      {point.title}
                    </h3>
                    <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                      {point.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <InstagramSection />

        <ReviewsSection />

        <section className="border-y border-border bg-secondary/30">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <p className="text-xs tracking-[0.28em] text-champagne uppercase">
                From first step to social floor
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
                A simple path to booking your first lesson.
              </h2>
            </Reveal>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <Reveal key={step.number} delay={index * 100}>
                  <div className="grid grid-cols-[auto_1fr] gap-4">
                    <span className="font-display text-3xl text-ember italic">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-xl font-medium text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-muted-foreground">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/dance-3.jpg"
              alt="Molly Hagman dancing salsa with a partner"
              fill
              sizes="100vw"
              className="object-cover object-center opacity-45"
            />
            <div className="absolute inset-0 bg-ink/80" />
          </div>
          <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32">
            <Reveal>
              <p className="font-display text-3xl leading-snug text-blush sm:text-5xl">
                Train with an instructor who has danced United Palace and
                Barclays Center, walked New York Fashion Week, and teaches that
                same clarity in a private lesson.
              </p>
              <p className="mt-8 text-sm tracking-[0.22em] text-champagne uppercase">
                Molly Hagman · Performer · Instructor
              </p>
            </Reveal>
          </div>
        </section>

        <section
          id="about"
          className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
            <Reveal>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/portrait.jpg"
                  alt="Molly Hagman posing in dance heels"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <p className="text-xs tracking-[0.28em] text-champagne uppercase">
                About Molly
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
                Sweden-born. New York–seasoned. Built for the salsa stage.
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  Molly Hagman trained at Malmö Dance Academy, International
                  Dance Academy in Copenhagen, and Broadway Dance Center in New
                  York. She spent over six years as a principal member of
                  Yamuleé Dance Company and now partners with legendary salsa
                  pioneer Vittico “La Magia.”
                </p>
                <p>
                  As Head Instructor at Salsa Salsa Dance Studio in Brooklyn,
                  she coaches dancers of every level — from first-timers to
                  performers preparing for congresses and social nights across
                  the city.
                </p>
              </div>
              <ul className="mt-8 space-y-3 text-sm text-foreground/90">
                <li className="flex gap-3">
                  <span className="text-ember">◆</span>
                  Music videos with Thalía, Chris &amp; Lenny, Doug Beavers
                </li>
                <li className="flex gap-3">
                  <span className="text-ember">◆</span>
                  Concert stages with Yiyo Sarante, Grupo Niche, La India
                </li>
                <li className="flex gap-3">
                  <span className="text-ember">◆</span>
                  Featured in Mighty Magazine Special Women’s Edition
                </li>
              </ul>
            </Reveal>
          </div>
        </section>

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
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="font-display text-xl text-foreground">Molly Hagman</p>
          <p>Private salsa &amp; bachata lessons · NYC &amp; online</p>
          <a
            href="https://www.instagram.com/molly_hagman/"
            target="_blank"
            rel="noreferrer"
            className="text-champagne hover:text-blush"
          >
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}
