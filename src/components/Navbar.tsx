"use client";

import { useEffect, useRef, useState } from "react";
import KBot from "@/components/KBot";
import { useTheme } from "@/components/ThemeProvider";

const groups = [
  { label: "Introduction", links: [{ id: "home", label: "Home" }, { id: "about", label: "About" }] },
  { label: "Work", links: [{ id: "experience", label: "Experience" }, { id: "projects", label: "Projects" }] },
  { label: "Practice", links: [{ id: "stack", label: "Stack" }, { id: "contact", label: "Contact" }] },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [guideOpen, setGuideOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const sections = groups.flatMap((group) => group.links).map(({ id }) => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el));
    const update = () => {
      const current = [...sections].reverse().find((section) => section.getBoundingClientRect().top <= 180);
      setActive(current?.id ?? "home");
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(100, Math.round(window.scrollY / scrollable * 100)) : 0);
    };
    let frame = 0;
    const schedule = () => { if (!frame) frame = requestAnimationFrame(() => { frame = 0; update(); }); };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); };
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); } };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const close = () => setOpen(false);
  return (
    <>
      <div className="reading-progress" role="progressbar" aria-label="Page reading progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}><span style={{ transform: `scaleX(${progress / 100})` }} /></div>
      <aside className={open ? "sidebar sidebar-open" : "sidebar"}>
        <div className="sidebar-top">
          <a className="sidebar-name" href="#home" onClick={close}>Kenneth Bitun</a>
          <div className="sidebar-controls">
            <button className="sidebar-theme" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}>{theme === "light" ? "Dark" : "Light"}</button>
            <button ref={toggle} type="button" className="sidebar-toggle" aria-expanded={open} aria-controls="sidebar-links" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>{open ? "Close" : "Menu"}</button>
          </div>
        </div>
        <nav id="sidebar-links" className="sidebar-links" aria-label="Page navigation">
          {groups.map((group) => <div className="sidebar-group" key={group.label}>
            <p>{group.label}</p>
            {group.links.map((link) => <a href={"#" + link.id} key={link.id} aria-current={active === link.id ? "location" : undefined} onClick={close}>{link.label}</a>)}
          </div>)}
        </nav>
        <button className="assistant-note" type="button" onClick={() => { setGuideOpen(true); setOpen(false); }}><span>Ask about my projects</span><small>Local portfolio guide</small></button>
        <div className="sidebar-social"><a href="https://github.com/Kendot1" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/kennethbitun/" target="_blank" rel="noreferrer">LinkedIn</a></div>
      </aside>
      <KBot open={guideOpen} onOpenChange={setGuideOpen} />
    </>
  );
}
