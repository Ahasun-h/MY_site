"use client";

import Image from "next/image";
import { navItems } from "@/data/siteData";

interface MobileNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function MobileNav({
  activeSection,
  onNavigate,
}: MobileNavProps) {
  return (
    <>
      <header className="mobile-header">
        <Image
          src="/assets/img/MY_IMAGE.png"
          alt="Ahasun"
          width={50}
          height={50}
          style={{ borderRadius: "50px" }}
        />
        <h4>
          Ahasun_H
          <br />
          <span>Web developer</span>
        </h4>
      </header>

      <nav className="mobile_nav">
        {navItems.map((item) => (
          <a
            key={item.id}
            className={`nav_item ${
              activeSection === item.id ? "active" : ""
            }`}
            href={`#${item.id}`}
            title={item.label}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(item.id);
            }}
          >
            <i className={`${item.icon} icon`} />
          </a>
        ))}
      </nav>
    </>
  );
}
