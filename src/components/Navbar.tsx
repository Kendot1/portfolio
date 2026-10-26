"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { useTheme } from "./ThemeProvider";

const links = [
  { id: "work", label: "Work" }, { id: "explore", label: "Console" }, { id: "stack", label: "Stack" },
  { id: "about", label: "About" }, { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (pathname !== "/") return;
    const targets = links.map((link) => document.getElementById(link.id)).filter((item): item is HTMLElement => Boolean(item));
    let frame = 0;
    const updateActiveSection = () => {
      frame = 0;
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
        setActive("contact");
        return;
      }
      const readingLine = Math.max(100, window.innerHeight * 0.28);
      const current = [...targets].reverse().find((target) => target.getBoundingClientRect().top <= readingLine);
      setActive(current?.id ?? "home");
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    };
    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [pathname]);
  useEffect(() => {
    if (!mobileOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [mobileOpen]);
  const hrefFor = (id: string) => pathname === "/" ? "#" + id : "/#" + id;
  const activeSection = pathname === "/" ? active : "";
  const closeMenu = () => setMobileOpen(false);
  return (
    <header className="site-header">
      <div className="nav-frame page-shell">
        <a className="wordmark" href={hrefFor("home")} onClick={closeMenu}>
          <span className="wordmark-mark">KB</span><span>Kenneth Bitun</span>
        </a>
        <div className="nav-right">
          <nav className="primary-nav" aria-label="Primary navigation">
            {links.map((link) => <a key={link.id} className="nav-link" href={hrefFor(link.id)} aria-current={activeSection === link.id ? "location" : undefined}>{link.label}</a>)}
          </nav>
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={"Switch to " + (theme === "light" ? "dark" : "light") + " theme"}>
            {theme === "light" ? <FiMoon aria-hidden="true" /> : <FiSun aria-hidden="true" />}
          </button>
          <button ref={menuButton} className="menu-toggle" type="button" onClick={() => setMobileOpen((open) => !open)} aria-expanded={mobileOpen} aria-controls="mobile-navigation" aria-label={mobileOpen ? "Close navigation" : "Open navigation"}>
            {mobileOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" className="mobile-nav-panel" aria-label="Mobile navigation" hidden={!mobileOpen}>
        {links.map((link) => <a key={link.id} className="mobile-nav-link" href={hrefFor(link.id)} aria-current={activeSection === link.id ? "location" : undefined} onClick={closeMenu}>{link.label}</a>)}
      </nav>
    </header>
  );
}