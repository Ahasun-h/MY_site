"use client";

import { socialLinks } from "@/data/siteData";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border-subtle)",
      padding: "32px 0",
      marginTop: "40px",
    }}>
      <div className="container">
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}>
          <div style={{ display: "flex", gap: "8px" }}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-muted)",
                  fontSize: "16px",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                }}
              >
                <i className={social.icon} />
              </a>
            ))}
          </div>
          <p style={{
            margin: 0,
            fontSize: "0.8rem",
            color: "var(--text-muted)",
          }}>
            &copy; {new Date().getFullYear()} Ahasun_H. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
