"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export default function SmoothRevealText({
  children,
  className = "",
  as: Tag = "h2",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const text = el.textContent || "";
    el.innerHTML = "";

    const words = text.split(" ");
    words.forEach((word, i) => {
      const wordSpan = document.createElement("span");
      wordSpan.style.display = "inline-block";
      wordSpan.style.overflow = "hidden";
      wordSpan.style.verticalAlign = "top";

      const inner = document.createElement("span");
      inner.textContent = word;
      inner.style.display = "inline-block";
      inner.style.transform = "translateY(100%)";
      inner.classList.add("reveal-word");

      wordSpan.appendChild(inner);
      el.appendChild(wordSpan);

      if (i < words.length - 1) {
        const space = document.createTextNode("\u00A0");
        el.appendChild(space);
      }
    });

    const reveals = el.querySelectorAll(".reveal-word");

    gsap.to(reveals, {
      y: 0,
      duration: 0.8,
      stagger: 0.04,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [children]);

  return (
    <Tag
      ref={ref as React.RefObject<never>}
      className={className}
    >
      {children}
    </Tag>
  );
}
