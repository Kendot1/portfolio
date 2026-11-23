"use client";

import { useEffect, useRef, useState } from "react";

const groups = [
  { label: "Main", links: [{ id: "home", label: "Home" }, { id: "about", label: "About" }] },
  { label: "Work", links: [{ id: "experience", label: "Experience" }, { id: "projects", label: "Projects" }, { id: "stack", label: "Stack" }] },
  { label: "More", links: [{ id: "contact", label: "Contact" }] },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const sections = groups.flatMap((group) => group.links).map(({ id }) => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el));
    let frame = 0;
    const update = () => {
      frame = 0;
      const current = [...sections].reverse().find((section) => section.getBoundingClientRect().top <= 180);
      setActive(current?.id ?? "home");
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
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
    <aside className={open ? "sidebar sidebar-open" : "sidebar"}>
      <div className="sidebar-top">
        <a className="sidebar-name" href="#home" onClick={close}>Kenneth Bitun</a>
        <button ref={toggle} type="button" className="sidebar-toggle" aria-expanded={open} aria-controls="sidebar-links" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>{open ? "Close" : "Menu"}</button>
      </div>
      <nav id="sidebar-links" className="sidebar-links" aria-label="Page navigation">
        {groups.map((group) => <div className="sidebar-group" key={group.label}>
          <p>{group.label}</p>
          {group.links.map((link) => <a href={"#" + link.id} key={link.id} aria-current={active === link.id ? "location" : undefined} onClick={close}>{link.label}</a>)}
        </div>)}
      </nav>
      <a className="assistant-note" href="#contact"><span>Ask about my projects</span><small>Local portfolio guide</small></a>
      <div className="sidebar-social"><a href="https://github.com/Kendot1" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/kennethbitun/" target="_blank" rel="noreferrer">LinkedIn</a></div>
    </aside>
  );
}
