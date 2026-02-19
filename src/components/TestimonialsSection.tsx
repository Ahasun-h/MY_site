"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { testimonialData } from "@/data/siteData";

export default function TestimonialsSection({
  isActive,
}: {
  isActive: boolean;
}) {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);
  const [logosVisible, setLogosVisible] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  const setCardRef = useCallback(
    (el: HTMLDivElement | null, index: number) => {
      cardRefs.current[index] = el;
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.target === headerRef.current) {
            setHeaderVisible(true);
          } else if (entry.target === logosRef.current) {
            setLogosVisible(true);
          } else {
            const idx = Number(entry.target.getAttribute("data-idx"));
            if (!isNaN(idx)) {
              setVisibleCards((prev) => new Set(prev).add(idx));
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -30px 0px" }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (logosRef.current) observer.observe(logosRef.current);
    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`vlt-section pp-scrollable ${isActive ? "active" : ""}`}
      data-anchor="Testimonials"
      id="Testimonials"
      data-brightness="dark"
    >
      <div className="vlt-section__vertical-align">
        <div className="vlt-section__content">
          <div className="container">

                {/* Header */}
                <div
                  ref={headerRef}
                  className={`testi-header${headerVisible ? " testi-header--visible" : ""}`}
                >
                  <span className="testi-label">What Others Say</span>
                  <h2 className="testi-title">
                    The Voices <span className="testi-title__accent">Behind</span>
                  </h2>
                  <p className="testi-subtitle">
                    Trusted by clients who value quality, reliability and results
                  </p>
                </div>

                {/* Testimonial Cards */}
                <div className="testi-grid">
                  {testimonialData.items.map((item, index) => (
                    <div
                      key={index}
                      ref={(el) => setCardRef(el, index)}
                      data-idx={index}
                      className={`testi-card${visibleCards.has(index) ? " testi-card--visible" : ""}`}
                      style={{ transitionDelay: `${index * 120}ms` }}
                    >
                      {/* Quote Icon */}
                      <div className="testi-card__quote-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.3 2.5c-1.8 1-3.2 2.2-4.2 3.7-1 1.5-1.6 3.2-1.6 5.3 0 1.5.3 2.8 1 3.8.6 1 1.5 1.7 2.5 1.7 1 0 1.8-.3 2.4-1 .6-.6.9-1.4.9-2.3 0-.9-.3-1.6-.8-2.2-.5-.6-1.2-.9-2-.9-.4 0-.7.1-1 .2.5-1.7 1.7-3.3 3.6-4.8L11.3 2.5zm8 0c-1.8 1-3.2 2.2-4.2 3.7-1 1.5-1.6 3.2-1.6 5.3 0 1.5.3 2.8 1 3.8.6 1 1.5 1.7 2.5 1.7 1 0 1.8-.3 2.4-1 .6-.6.9-1.4.9-2.3 0-.9-.3-1.6-.8-2.2-.5-.6-1.2-.9-2-.9-.4 0-.7.1-1 .2.5-1.7 1.7-3.3 3.6-4.8L19.3 2.5z" />
                        </svg>
                      </div>

                      {/* Content */}
                      <p className="testi-card__content">
                        {item.content}
                      </p>

                      {/* Stars */}
                      <div className="testi-card__stars">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>

                      {/* Author */}
                      <div className="testi-card__author">
                        <div className="testi-card__avatar-wrap">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={48}
                            height={48}
                            className="testi-card__avatar"
                          />
                          <div className="testi-card__avatar-ring" />
                        </div>
                        <div className="testi-card__author-info">
                          <h4 className="testi-card__name">{item.name}</h4>
                          <span className="testi-card__position">{item.position}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Client Logos */}
                <div
                  ref={logosRef}
                  className={`testi-clients${logosVisible ? " testi-clients--visible" : ""}`}
                >
                  <span className="testi-clients__label">Trusted By</span>
                  <div className="testi-clients__strip">
                    {testimonialData.work_with.map((client, index) => (
                      <div
                        key={index}
                        className="testi-clients__item"
                        style={{ transitionDelay: `${index * 80}ms` }}
                      >
                        <Image
                          src={client.image}
                          alt={client.name}
                          width={100}
                          height={40}
                          className="testi-clients__logo"
                        />
                      </div>
                    ))}
                  </div>
                </div>

          </div>
        </div>
      </div>
    </section>
  );
}
