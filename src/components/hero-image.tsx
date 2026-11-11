"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

// Desktop-only: the image gently zooms out (1.0185 → 1.0) over the first
// screenful of scroll. It always fills the column — scale never drops below 1.
export function HeroZoomImage() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      if (!window.matchMedia("(min-width: 1024px)").matches) {
        el.style.transform = "";
        return;
      }
      const vh = window.innerHeight || 1;
      const maxScroll = document.documentElement.scrollHeight - vh;
      const range = Math.max(1, Math.min(vh, maxScroll));
      const progress = Math.min(Math.max(window.scrollY / range, 0), 1);
      // Zoom temporarily disabled — hold the image at a steady scale.
      el.style.transform = "scale(1)";
      // Subtle companion effect: shift the hero accent words toward the logo
      // navy (#5679ad → #4565a0) across the same scroll range.
      const r = Math.round(86 + (69 - 86) * progress);
      const g = Math.round(121 + (101 - 121) * progress);
      const b = Math.round(173 + (160 - 173) * progress);
      document.documentElement.style.setProperty(
        "--hero-accent",
        `rgb(${r} ${g} ${b})`,
      );
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative h-full w-full origin-center will-change-transform"
    >
      <Image
        src="/hero-dentist.png"
        alt="Dentist at Edison Dental 27 focused on patient care"
        fill
        priority
        sizes="60vw"
        className="object-cover"
      />
    </div>
  );
}
