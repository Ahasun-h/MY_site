"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function MagneticEffect() {
  useEffect(() => {
    const magneticBtns = document.querySelectorAll<HTMLElement>(".magnetic-btn");

    const handlers: Array<{
      el: HTMLElement;
      enter: (e: MouseEvent) => void;
      move: (e: MouseEvent) => void;
      leave: () => void;
    }> = [];

    magneticBtns.forEach((btn) => {
      const strength = 0.3;

      const onEnter = () => {
        gsap.to(btn, { scale: 1.05, duration: 0.3, ease: "power2.out" });
      };

      const onMove = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, {
          x: x * strength,
          y: y * strength,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const onLeave = () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "elastic.out(1, 0.4)",
        });
      };

      btn.addEventListener("mouseenter", onEnter);
      btn.addEventListener("mousemove", onMove);
      btn.addEventListener("mouseleave", onLeave);
      handlers.push({ el: btn, enter: onEnter, move: onMove, leave: onLeave });
    });

    return () => {
      handlers.forEach(({ el, enter, move, leave }) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return null;
}
