"use client";

import { useState } from "react";
import Image from "next/image";
import { navItems } from "@/data/siteData";

interface GlassNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function GlassNav({ activeSection, onNavigate }: GlassNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="glass-header">
      <nav className="glass-nav">
        <div className="glass-nav__logo" onClick={() => onNavigate("Home")}>
          <Image
            src="/assets/img/MY_IMAGE.png"
            alt="Ahasun"
            width={36}
            height={36}
            className="glass-nav__avatar"
          />
          <span className="glass-nav__name">Ahasun_H</span>
        </div>

        <ul className="glass-nav__links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`glass-nav__link ${
                  activeSection === item.id ? "glass-nav__link--active" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`glass-nav__burger ${mobileOpen ? "is-open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`glass-mobile-menu ${mobileOpen ? "is-open" : ""}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={
                  activeSection === item.id
                    ? "glass-mobile-menu__link--active"
                    : ""
                }
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                  setMobileOpen(false);
                }}
              >
                <i className={`${item.icon} icon`} />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
