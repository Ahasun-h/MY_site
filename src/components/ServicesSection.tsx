"use client";

import { serviceData } from "@/data/siteData";
import { useGsapReveal } from "@/hooks/useGsap";

export default function ServicesSection({ isActive }: { isActive: boolean }) {
  const sectionRef = useGsapReveal("#Services");

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className={`vlt-section pp-scrollable ${isActive ? "active" : ""}`}
      data-anchor="Services"
      id="Services"
      data-brightness="dark"
    >
      <div className="vlt-section__vertical-align">
        <div className="vlt-section__content">
          <div className="container">
            <div data-gsap="fade-up">
              <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "12px" }}>
                <span style={{
                  fontSize: "3.5rem",
                  fontWeight: 700,
                  color: "var(--accent)",
                  lineHeight: 1,
                }}>
                  {serviceData.year_of_experience}+
                </span>
                <span style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--text-muted)",
                }}>
                  Years Experience
                </span>
              </div>
            </div>
            <div data-gsap="fade-up">
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 600, lineHeight: 1.4, marginBottom: "3rem" }}>
                {serviceData.section_title}
                <span style={{ color: "var(--accent)" }}>
                  {serviceData.section_title_special}
                </span>
              </h2>
            </div>
            <div className="row" data-gsap="stagger-children">
              {serviceData.service_items.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div className="vlt-services">
                    <div style={{
                      width: "32px",
                      height: "3px",
                      background: "var(--accent)",
                      borderRadius: "2px",
                      marginBottom: "16px",
                      opacity: 0.6,
                    }} />
                    <h5 className="vlt-services__title">{item.name}</h5>
                    <p className="vlt-services__text">{item.description}</p>
                  </div>
                  <div style={{ height: "20px" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
