"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import GlassNav from "@/components/GlassNav";
import HomeSection from "@/components/HomeSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MagneticEffect from "@/components/MagneticEffect";

const CursorGlow = dynamic(() => import("@/components/CursorGlow"), {
  ssr: false,
});

const sections = [
  "Home",
  "Services",
  "Skills",
  "Portfolio",
  "Testimonials",
  "Contact",
];

export default function Page() {
  const [activeSection, setActiveSection] = useState("Home");
  const activeSectionsRef = useRef<Set<string>>(new Set(["Home"]));
  const [activeSections, setActiveSections] = useState<Set<string>>(
    new Set(["Home"])
  );

  const handleNavigate = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    document.body.classList.add("is-light");
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let topSection = activeSection;
        let topY = Infinity;

        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            activeSectionsRef.current.add(id);
            const rect = entry.boundingClientRect;
            if (rect.top >= 0 && rect.top < topY) {
              topY = rect.top;
              topSection = id;
            }
          }
        });

        setActiveSections(new Set(activeSectionsRef.current));

        if (topSection !== activeSection) {
          setActiveSection(topSection);
        }
      },
      { threshold: 0.15 }
    );

    sections.forEach((sectionId) => {
      const el = document.getElementById(sectionId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeSection]);

  return (
    <>
      <CursorGlow />
      <MagneticEffect />
      <GlassNav activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="vlt-main glass-main">
        <div className="vlt-fullpage-slider">
          <HomeSection isActive={activeSections.has("Home")} />
          <ServicesSection isActive={activeSections.has("Services")} />
          <AboutSection isActive={activeSections.has("Skills")} />
          <PortfolioSection isActive={activeSections.has("Portfolio")} />
          <TestimonialsSection isActive={activeSections.has("Testimonials")} />
          <ContactSection isActive={activeSections.has("Contact")} />
        </div>
        <Footer />
      </main>
    </>
  );
}
