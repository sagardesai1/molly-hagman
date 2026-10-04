"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll reveal. Content stays visible if JS fails or the observer never fires.
 * On the client we briefly arm the hide class, then fade in on intersect.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      setVisible(true);
    };

    // Arm animation only after mount so SSR/no-JS content stays visible.
    setArmed(true);

    // Safety net: never leave sections blank if the observer misses.
    const fallback = window.setTimeout(show, 900);

    if (typeof IntersectionObserver === "undefined") {
      show();
      return () => window.clearTimeout(fallback);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -4% 0px" },
    );

    observer.observe(node);
    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal${armed && !visible ? " reveal-pending" : ""}${visible ? " is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
