"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) {
      glow.style.display = "none";
      return;
    }

    const onMove = (e: MouseEvent) => {
      gsap.to(glow, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    const onEnterLink = () => {
      gsap.to(glow, { scale: 2.2, opacity: 0.5, duration: 0.3 });
    };

    const onLeaveLink = () => {
      gsap.to(glow, { scale: 1, opacity: 0.3, duration: 0.3 });
    };

    window.addEventListener("mousemove", onMove);

    const links = document.querySelectorAll("a, button, .magnetic-btn");
    links.forEach((link) => {
      link.addEventListener("mouseenter", onEnterLink);
      link.addEventListener("mouseleave", onLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", onEnterLink);
        link.removeEventListener("mouseleave", onLeaveLink);
      });
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" />;
}
