"use client";

import Image from "next/image";
import { aboutMeData, professionalExperienceData, techStacks } from "@/data/siteData";
import { useGsapReveal } from "@/hooks/useGsap";

export default function AboutSection({ isActive }: { isActive: boolean }) {
  const allTechStacks = techStacks.flat();
  const sectionRef = useGsapReveal("#Skills");

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className={`vlt-section pp-scrollable ${isActive ? "active" : ""}`}
      data-anchor="Skills"
      id="Skills"
      data-brightness="dark"
    >
      <div className="vlt-section__vertical-align">
        <div className="vlt-section__content">
          <div className="container">

            {/* ── ABOUT HERO ── */}
            <div className="about-hero">
              <div className="about-hero__left">
                <div data-gsap="fade-up">
                  <span className="about-label">More About Me</span>
                  <h2 className="about-headline">
                    I&apos;m {aboutMeData.name.split(".").pop()},{" "}
                    <span className="about-headline__accent">{aboutMeData.tagline}</span>
                  </h2>
                </div>

                <div data-gsap="fade-up">
                  <p className="about-bio">{aboutMeData.my_self}</p>
                  <p className="about-bio">{aboutMeData.my_self_secondary}</p>
                </div>

                <div data-gsap="fade-up">
                  <div className="about-quote">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21" />
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3" />
                    </svg>
                    <p>{aboutMeData.quote}</p>
                  </div>
                </div>

                <div data-gsap="fade-up">
                  <div className="about-interests" data-gsap="stagger-children">
                    {aboutMeData.interests.map((interest) => (
                      <span key={interest} className="about-interest-tag">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="about-hero__right">
                <div data-gsap="scale-in">
                  <div className="about-photo-card">
                    <Image
                      src={aboutMeData.image}
                      alt={aboutMeData.name}
                      width={400}
                      height={500}
                      className="about-photo"
                    />
                    <div className="about-photo-overlay" />
                    <div className="about-photo-info">
                      <span className="about-photo-name">{aboutMeData.name}</span>
                      <span className="about-photo-location">
                        <i className="bx bx-map" /> {aboutMeData.address}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── THE EXPERIENCE ── */}
            <div className="about-experience-section">
              <div data-gsap="fade-up">
                <span className="about-label">The Experience</span>
                <h3 className="about-section-title">
                  Experience That Brings <span className="about-headline__accent">Ideas to Life</span>
                </h3>
              </div>

              <div className="about-timeline" data-gsap="stagger-children">
                {professionalExperienceData.map((exp, idx) => (
                  <div key={idx} className="about-timeline-item">
                    <div className="about-timeline-date">
                      <span>{exp.work_experience}</span>
                    </div>
                    <div className="about-timeline-content">
                      <div className="about-timeline-header">
                        <h4 className="about-timeline-company">{exp.company_name}</h4>
                        <span className="about-timeline-badge">On-site</span>
                      </div>
                      <p className="about-timeline-role">{exp.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── TECH STACK ── */}
            <div className="about-techstack-section">
              <div data-gsap="fade-up">
                <span className="about-label">Tech Stack</span>
                <h3 className="about-section-title">
                  Tools & <span className="about-headline__accent">Technologies</span>
                </h3>
              </div>

              <div data-gsap="fade-up">
                <div className="about-tech-grid" data-gsap="stagger-children">
                  {allTechStacks.map((tech) => (
                    <span key={tech} className="about-tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── PERSONAL INFO CARDS ── */}
            <div className="about-info-cards" data-gsap="stagger-children">
              <div>
                <div className="about-info-card">
                  <div className="about-info-card__icon"><i className="bx bx-envelope" /></div>
                  <div>
                    <span className="about-info-card__label">Email</span>
                    <span className="about-info-card__value">{aboutMeData.email}</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="about-info-card">
                  <div className="about-info-card__icon"><i className="bx bx-phone" /></div>
                  <div>
                    <span className="about-info-card__label">Mobile</span>
                    <span className="about-info-card__value">{aboutMeData.mobile}</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="about-info-card">
                  <div className="about-info-card__icon"><i className="bx bx-map" /></div>
                  <div>
                    <span className="about-info-card__label">Location</span>
                    <span className="about-info-card__value">{aboutMeData.address}</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="about-info-card">
                  <div className="about-info-card__icon"><i className="bx bx-calendar" /></div>
                  <div>
                    <span className="about-info-card__label">Born</span>
                    <span className="about-info-card__value">{aboutMeData.date_of_birth}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
