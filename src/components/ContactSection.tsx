"use client";

import { useState, FormEvent } from "react";
import { contactData } from "@/data/siteData";
import { useGsapReveal } from "@/hooks/useGsap";

export default function ContactSection({ isActive }: { isActive: boolean }) {
  const sectionRef = useGsapReveal("#Contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${contactData.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className={`vlt-section pp-scrollable ${isActive ? "active" : ""}`}
      data-anchor="Contact"
      id="Contact"
      data-brightness="dark"
    >
      <div className="vlt-section__vertical-align">
        <div className="vlt-section__content">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div data-gsap="fade-left">
                  <span style={{
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "var(--text-muted)",
                    fontWeight: 500,
                    display: "block",
                    marginBottom: "8px",
                  }}>
                    Get in Touch
                  </span>
                  <h2 style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    marginBottom: "1rem",
                  }}>
                    Contact
                  </h2>
                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
                    Have a project in mind? Let&apos;s build something amazing together.
                  </p>
                  <div style={{ height: "32px" }} />
                  <div style={{
                    padding: "20px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-lg)",
                    marginBottom: "16px",
                  }}>
                    <span style={{
                      fontSize: "0.7rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "var(--text-muted)",
                    }}>
                      Email
                    </span>
                    <div style={{ height: "4px" }} />
                    <a href={`mailto:${contactData.email}`} style={{
                      color: "var(--text-primary)",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                    }}>
                      {contactData.email}
                    </a>
                  </div>
                  <div style={{
                    padding: "20px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-lg)",
                    marginBottom: "24px",
                  }}>
                    <span style={{
                      fontSize: "0.7rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "var(--text-muted)",
                    }}>
                      Phone
                    </span>
                    <div style={{ height: "4px" }} />
                    <a href={`tel:${contactData.mobile_number}`} style={{
                      color: "var(--text-primary)",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                    }}>
                      {contactData.mobile_number}
                    </a>
                  </div>
                  <a
                    className="vlt-btn vlt-btn--secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={contactData.location}
                  >
                    <span className="vlt-btn__text">Get Direction</span>
                    <span className="vlt-btn__icon vlt-btn__icon--right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </span>
                  </a>
                </div>
                <div style={{ height: "60px" }} className="d-lg-none" />
              </div>
              <div className="col-lg-7">
                <div data-gsap="fade-right">
                  <h5 style={{ fontWeight: 500, lineHeight: 1.6, marginBottom: "2rem" }}>
                    I&apos;m always looking for great collaborators. Let&apos;s{" "}
                    <span style={{ color: "var(--accent)" }}>build something together!</span>
                  </h5>
                  <form className="vlt-contact-form" onSubmit={handleSubmit}>
                    <div className="vlt-form-row two-col">
                      <div className="vlt-form-group">
                        <label htmlFor="contact-name">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          required
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>
                      <div className="vlt-form-group">
                        <label htmlFor="contact-email">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          required
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="vlt-form-row">
                      <div className="vlt-form-group">
                        <label htmlFor="contact-subject">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="contact-subject"
                          name="subject"
                          required
                          placeholder="Project discussion"
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              subject: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="vlt-form-group">
                      <label htmlFor="contact-message">
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="contact-message"
                        rows={4}
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            message: e.target.value,
                          })
                        }
                      />
                    </div>
                    <button className="vlt-btn vlt-btn--primary" type="submit">
                      <span className="vlt-btn__text">Send Message</span>
                      <span className="vlt-btn__icon vlt-btn__icon--right">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
