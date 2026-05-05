import { useEffect, useState, useRef } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>();

  useEffect(() => {
    let scrollY = 0;
    let maxScroll = 0;

    const updateScroll = () => {
      scrollY = window.scrollY;
      maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const newProgress = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;
      setProgress(newProgress);
    };

    const onScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(updateScroll);
    };

    // Initial update
    updateScroll();

    // Add event listeners
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return progress;
}