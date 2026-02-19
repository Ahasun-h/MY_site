"use client";

import { useEffect, useRef, Suspense } from "react";
import dynamic from "next/dynamic";
import { homeData, aboutMeData, contactData, techStacks, serviceData } from "@/data/siteData";
import { useGsapHeroEntrance } from "@/hooks/useGsap";

const ParticleField = dynamic(() => import("@/components/ParticleField"), {
  ssr: false,
});

function AnimatedCounter({
  target,
  duration = 2500,
}: {
  target: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    if (animated.current || !ref.current) return;
    animated.current = true;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      if (ref.current) {
        ref.current.textContent = String(Math.ceil(progress * target));
      }
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  return <span ref={ref}>0</span>;
}

function MarqueeRow({ items, direction }: { items: string[]; direction: "left" | "right" }) {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div className="hero-marquee-row">
      <div className={`hero-marquee-track hero-marquee-track--${direction}`}>
        {doubled.map((item, i) => (
          <span key={i} className="hero-marquee-chip">{item}</span>
        ))}
      </div>
    </div>
  );
}

export default function HomeSection({ isActive }: { isActive: boolean }) {
  const sectionRef = useGsapHeroEntrance();

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className={`vlt-section pp-scrollable hero-section ${isActive ? "active" : ""}`}
      data-anchor="Home"
      id="Home"
      data-brightness="dark"
    >
      <Suspense fallback={null}>
        <ParticleField />
      </Suspense>

      <div className="hero-spotlight" />

      <div className="vlt-section__vertical-align">
        <div className="vlt-section__content">
          <div className="container" style={{ position: "relative", zIndex: 2 }}>

            <div data-hero="subtitle">
              <p className="hero-subtitle">
                I help companies build professional websites &amp; innovative solutions
              </p>
            </div>

            <div data-hero="heading">
              <h1 className="hero-heading">
                Hello, I&apos;m {aboutMeData.name}{" "}
                <span className="hero-heading__accent">a Full Stack {homeData.profession}</span>
              </h1>
            </div>

            <div data-hero="cta">
              <div className="hero-cta-row">
                <a href={`mailto:${contactData.email}`} className="hero-btn-connect magnetic-btn">
                  Let&apos;s Connect
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
                <a href={`mailto:${contactData.email}`} className="hero-email">
                  {contactData.email}
                </a>
              </div>
            </div>

            <div className="hero-cards">
              <div className="hero-card hero-card--left" data-hero="card">
                <div className="hero-card__header">
                  <span className="hero-card__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </span>
                  <h3 className="hero-card__title">Collaboration</h3>
                </div>
                <p className="hero-card__text">
                  I prioritize client collaboration, fostering open communication to deliver outstanding results.
                </p>
                <div className="hero-card__stats">
                  <div className="hero-stat">
                    <span className="hero-stat__number">
                      <AnimatedCounter target={homeData.complete_projects} />+
                    </span>
                    <span className="hero-stat__label">Projects</span>
                  </div>
                  <div className="hero-stat">
                    <span className="hero-stat__number">
                      <AnimatedCounter target={homeData.satisfied_customer} />+
                    </span>
                    <span className="hero-stat__label">Happy Clients</span>
                  </div>
                  <div className="hero-stat">
                    <span className="hero-stat__number">
                      <AnimatedCounter target={serviceData.year_of_experience} />+
                    </span>
                    <span className="hero-stat__label">Years Exp.</span>
                  </div>
                </div>
                <a href={homeData.cv_link} target="_blank" rel="noopener noreferrer" className="hero-card__link magnetic-btn">
                  View Resume
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </div>

              <div className="hero-card hero-card--right" data-hero="card">
                <div className="hero-card__header">
                  <span className="hero-card__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </span>
                  <h3 className="hero-card__title">Passionate about cutting-edge technologies</h3>
                </div>
                <div className="hero-marquee-container">
                  {techStacks.map((row, i) => (
                    <MarqueeRow key={i} items={row} direction={i % 2 === 0 ? "left" : "right"} />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
