"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import KBot from "@/components/KBot";
import { useTheme } from "@/components/ThemeProvider";

const links = [
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [guideOpen, setGuideOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const home = pathname === "/";
  const sectionHref = (id: string) => `${home ? "" : "/"}#${id}`;

  useEffect(() => {
    const sections = ["home", ...links.map(({ id }) => id)].map((id) => document.getElementById(id)).filter((element): element is HTMLElement => Boolean(element));
    const update = () => {
      const current = [...sections].reverse().find((section) => section.getBoundingClientRect().top <= 150);
      setActive(current?.id ?? "home");
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <div className="nav-frame">
        <a className="wordmark" href={sectionHref("home")} onClick={close}><span className="wordmark-mark" aria-hidden="true">KB</span><span>Kenneth Bitun</span></a>
        <div className="nav-right">
          <nav className="primary-nav" aria-label="Main navigation">
            {links.map((link) => <a className="nav-link" href={sectionHref(link.id)} key={link.id} aria-current={home && active === link.id ? "location" : undefined}>{link.label}</a>)}
          </nav>

          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`} title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}><span aria-hidden="true">{theme === "light" ? "◐" : "◑"}</span><span className="theme-label">{theme === "light" ? "Dark" : "Light"}</span></button>
          <button ref={toggle} type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"} onClick={() => { setGuideOpen(false); setOpen((value) => !value); }}>{open ? "Close" : "Menu"}</button>
          <div className="guide-entry"><KBot open={guideOpen} onOpenChange={setGuideOpen} /></div>
        </div>
        <nav id="mobile-navigation" className="mobile-nav-panel" aria-label="Mobile navigation" hidden={!open}>
          {links.map((link) => <a className="mobile-nav-link" href={sectionHref(link.id)} key={link.id} aria-current={home && active === link.id ? "location" : undefined} onClick={close}>{link.label}</a>)}
          <button type="button" className="mobile-kbot-link" onClick={() => { setGuideOpen(true); close(); }}>Ask K-Bot</button>
        </nav>
      </div>
    </header>
  );
}
