"use client";

import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#why", label: "Lessons" },
  { href: "#watch", label: "Watch" },
  { href: "#reviews", label: "Reviews" },
  { href: "#about", label: "About" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled || open
          ? "border-b border-border/80 bg-ink/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-display text-2xl tracking-wide text-foreground sm:text-3xl"
          onClick={() => setOpen(false)}
        >
          Molly Hagman
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-[0.14em] text-foreground/80 uppercase transition-colors hover:text-blush"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            className={cn(
              buttonVariants(),
              "rounded-none bg-ember px-5 text-primary-foreground hover:bg-ember/90",
            )}
          >
            Book a lesson
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#book"
            className={cn(
              buttonVariants({ size: "sm" }),
              "rounded-none bg-ember px-3 text-primary-foreground hover:bg-ember/90",
            )}
            onClick={() => setOpen(false)}
          >
            Book
          </a>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center border border-border/70 text-foreground"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden className="flex w-4 flex-col gap-1.5">
              <span
                className={cn(
                  "h-px w-full bg-current transition-transform",
                  open && "translate-y-[3.5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-px w-full bg-current transition-opacity",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "h-px w-full bg-current transition-transform",
                  open && "-translate-y-[3.5px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-border/60 md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav
          aria-label="Mobile"
          className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-3 text-sm tracking-[0.14em] text-foreground/90 uppercase"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            className="py-3 text-sm tracking-[0.14em] text-blush uppercase"
            onClick={() => setOpen(false)}
          >
            Book a lesson
          </a>
        </nav>
      </div>
    </header>
  );
}
