"use client";

import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import { contactLinks, featuredProjects, skillGroups } from "@/data/portfolio";
import { education, experience } from "@/data/credentials";

const suggestions = ["What projects has Kenneth built?", "What technologies does he use?", "Tell me about Foodcast", "How can I contact him?"];
const answerFor = (query: string) => {
  const text = query.toLowerCase().replace(/[^a-z0-9+#.\s-]/g, " ").replace(/\s+/g, " ").trim();
  const project = /\b(foodcast|food cast|forecast|food price|thesis)\b/.test(text) ? featuredProjects.find((item) => item.id === "foodcast")
    : /\b(supremo|barber|booking|appointment)\b/.test(text) ? featuredProjects.find((item) => item.id === "supremo-barber") : undefined;
  if (project) return {
    text: `${project.title}: ${project.summary} ${project.approach}${project.id === "foodcast" ? " Weekly and monthly writer outputs currently use persistence baselines, not ML forecasts." : ""}`,
    links: [{ text: `${project.title} case study`, href: `/work/${project.id}` }, ...(project.githubUrl ? [{ text: `${project.title} source code`, href: project.githubUrl }] : []), ...(project.liveUrl ? [{ text: `${project.title} live project`, href: project.liveUrl }] : [])],
  };
  if (/\b(daddy|bons|kitchen|lucent|trading|journal|ordering)\b/.test(text)) return { text: "That project is not in the selected work on this page.", links: [{ text: "See selected projects", href: "#projects" }] };
  if (/\b(contact|email|reach|hire|message|linkedin|github)\b/.test(text)) return { text: "You can email Kenneth at kennethbitun344@gmail.com or visit his professional profiles.", links: [{ text: "Email Kenneth", href: "mailto:kennethbitun344@gmail.com" }, ...contactLinks.filter((link) => ["GitHub", "LinkedIn"].includes(link.label)).map((link) => ({ text: link.label, href: link.href })), { text: "Contact section", href: "#contact" }] };
  if (/\b(education|school|university|college|studies|study|student|degree)\b/.test(text)) return { text: `${education.program} at ${education.school}, ${education.period}.`, links: [{ text: "Education", href: "#experience" }] };
  if (/\b(certification|certifications|certificate|certificates|credential|credentials|cisco)\b/.test(text)) return { text: "The portfolio lists certificates including Cisco Networking Academy courses. See the credentials section for details and links.", links: [{ text: "Certifications", href: "#certifications" }] };
  if (/\b(experience|intern|internship|flyrank|job|career)\b/.test(text)) return { text: experience.map((item) => `${item.role}, ${item.organization}: ${item.description}`).join(" "), links: [{ text: "About Kenneth", href: "#about" }] };
  if (/\b(stack|technology|technologies|tech|tools|tool|framework|frameworks|language|languages|skills|skill|use|uses|using|python|react|typescript)\b/.test(text)) return { text: skillGroups.map((group) => `${group.title}: ${group.skills.join(", ")}.`).join(" "), links: [{ text: "Browse the stack", href: "#stack" }] };
  if (/\b(project|projects|built|build|builds|work|portfolio|made|create|created)\b/.test(text)) return { text: "The selected work includes Foodcast, Supremo Barber, Daddy Bons Kitchen, and Lucent. Foodcast and Supremo Barber have case studies and source links.", links: [{ text: "See all projects", href: "#work" }, ...featuredProjects.map((item) => ({ text: `${item.title} case study`, href: `/work/${item.id}` }))] };
  return { text: "I could not match that question. Try asking about projects, Foodcast, Supremo Barber, technologies, education, experience, certifications, or contact. This guide uses local matching and does not send your question anywhere.", links: [{ text: "Browse selected work", href: "#work" }] };
};

export default function KBot({ open = false, onOpenChange = () => {} }: { open?: boolean; onOpenChange?: (open: boolean) => void }) {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState<ReturnType<typeof answerFor> | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") { onOpenChange(false); buttonRef.current?.focus(); } };
    window.addEventListener("keydown", onKey);
    inputRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);
  function ask(value: string) { const clean = value.trim(); if (clean) { setQuery(clean); setAnswer(answerFor(clean)); } }
  return <div className="kbot-wrap">
    <button ref={buttonRef} className="kbot-trigger" type="button" aria-expanded={open} aria-controls="kbot-panel" onClick={() => onOpenChange(!open)}>
      <span className="kbot-face" aria-hidden="true"><svg viewBox="0 0 72 72"><rect x="9" y="12" width="54" height="48" rx="19"/><circle cx="27" cy="34" r="3"/><circle cx="45" cy="34" r="3"/><path d="M28 45q8 7 16 0"/></svg></span><span><strong>K-Bot</strong><small>Your local portfolio guide</small></span><FiArrowUpRight aria-hidden="true" />
    </button>
    {open && <div id="kbot-panel" className="kbot-panel" role="region" aria-label="K-Bot portfolio guide">
      <div className="kbot-header"><div><strong>K-Bot</strong><span>Local portfolio guide</span></div><button type="button" aria-label="Close K-Bot" onClick={() => { onOpenChange(false); buttonRef.current?.focus(); }}><FiX aria-hidden="true" /></button></div>
      <p className="kbot-greeting">Ask about Kenneth’s work. Questions are matched locally and are not sent anywhere.</p>
      <div className="kbot-suggestions">{suggestions.map((item) => <button key={item} type="button" onClick={() => ask(item)}>{item}</button>)}</div>
      <div className="kbot-answer" aria-live="polite" aria-atomic="true">{answer && <><p>{answer.text}</p><div>{answer.links.map((link) => <a key={link.href} href={link.href}>{link.text}<FiArrowUpRight aria-hidden="true" /></a>)}</div></>}</div>
      <form className="kbot-form" onSubmit={(event) => { event.preventDefault(); ask(query); }}><label htmlFor="kbot-question">Ask about the portfolio</label><input ref={inputRef} id="kbot-question" value={query} maxLength={180} onChange={(event) => setQuery(event.target.value)} placeholder="Ask about projects or technologies"/><button type="submit">Ask</button></form>
    </div>}
  </div>;
}
