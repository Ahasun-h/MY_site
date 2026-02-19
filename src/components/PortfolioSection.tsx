"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/siteData";

export default function PortfolioSection({ isActive }: { isActive: boolean }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filteredItems =
    activeFilter === "all"
      ? portfolioData.items
      : portfolioData.items.filter((item) => item.type === activeFilter);

  const setCardRef = useCallback(
    (el: HTMLDivElement | null, index: number) => {
      cardRefs.current[index] = el;
    },
    []
  );

  const handleFilterChange = useCallback((filter: string) => {
    setActiveFilter(filter);
    setVisibleCards(new Set());
    cardRefs.current = [];
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-idx"));
            if (!isNaN(idx)) {
              setVisibleCards((prev) => new Set(prev).add(idx));
            }
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const timer = setTimeout(() => {
      cardRefs.current.forEach((el) => {
        if (el) observer.observe(el);
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [filteredItems]);

  return (
    <section
      className={`vlt-section pp-scrollable ${isActive ? "active" : ""}`}
      data-anchor="Portfolio"
      id="Portfolio"
      data-brightness="dark"
    >
      <div className="vlt-section__vertical-align">
        <div className="vlt-section__content">
          <div className="container">

                {/* Header */}
                <div className="showcase-header">
                  <span className="showcase-label">Case Studies</span>
                  <h2 className="showcase-title">Curated Work</h2>
                  <p className="showcase-subtitle">
                    Selected projects showcasing my expertise across web, mobile & design
                  </p>
                </div>

                {/* Filter Menu */}
                <div className="showcase-filters">
                  {portfolioData.menu.map((menuItem) => (
                    <button
                      key={menuItem.filter}
                      className={`showcase-filter-btn${activeFilter === menuItem.filter ? " showcase-filter-btn--active" : ""}`}
                      onClick={() => handleFilterChange(menuItem.filter)}
                    >
                      {menuItem.label}
                    </button>
                  ))}
                </div>

                {/* Project Cards */}
                <div className="showcase-list">
                  {filteredItems.map((item, index) => {
                    const num = String(index + 1).padStart(2, "0");
                    const isVisible = visibleCards.has(index);

                    return (
                      <div
                        key={`${activeFilter}-${index}`}
                        ref={(el) => setCardRef(el, index)}
                        data-idx={index}
                        className={`showcase-card${isVisible ? " showcase-card--visible" : ""}`}
                        style={{ transitionDelay: `${(index % 6) * 80}ms` }}
                      >
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="showcase-card__link"
                        >
                          {/* Left: Number + Meta */}
                          <div className="showcase-card__meta">
                            <span className="showcase-card__number">{num}</span>
                            <span className="showcase-card__type">{item.typeLabel}</span>
                          </div>

                          {/* Center: Content */}
                          <div className="showcase-card__content">
                            <div className="showcase-card__top">
                              <h3 className="showcase-card__name">{item.name}</h3>
                              <span className="showcase-card__year">{item.year}</span>
                            </div>
                            <p className="showcase-card__desc">{item.description}</p>
                            <div className="showcase-card__stacks">
                              {item.stacks.map((stack, j) => (
                                <span key={j} className="showcase-card__stack">
                                  {stack}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Right: Image thumbnail */}
                          <div className="showcase-card__thumb">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={220}
                              height={140}
                              className="showcase-card__img"
                            />
                            <div className="showcase-card__arrow">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17L17 7" />
                                <path d="M7 7h10v10" />
                              </svg>
                            </div>
                          </div>
                        </a>
                      </div>
                    );
                  })}
                </div>

          </div>
        </div>
      </div>
    </section>
  );
}
