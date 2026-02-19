"use client";

import Image from "next/image";
import { navItems } from "@/data/siteData";

interface SidebarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onToggle: () => void;
}

export default function Sidebar({
  activeSection,
  onNavigate,
  onToggle,
}: SidebarProps) {
  return (
    <>
      <header>
        <div className="image-text">
          <span className="image">
            <Image
              src="/assets/img/MY_IMAGE.png"
              alt="Ahasun"
              width={40}
              height={40}
            />
          </span>
          <div className="text logo-text">
            <span className="name">Ahasun_H</span>
            <span className="profession">Web developer</span>
          </div>
        </div>
        <i className="bx bx-chevron-right toggle" onClick={onToggle} />
      </header>

      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
            {navItems.map((item) => (
              <li className="nav-link" key={item.id}>
                <a
                  className={`menu_bar_item ${
                    activeSection === item.id ? "active" : ""
                  }`}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.id);
                  }}
                >
                  <i className={`${item.icon} icon`} />
                  <span className="text nav-text">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
