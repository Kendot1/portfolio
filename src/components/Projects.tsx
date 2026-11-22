"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

const projects = [
  ...featuredProjects.map((project) => ({
    ...project,
    caseStudy: true,
    liveUrl: project.id === "supremo-barber" ? "https://supremobarber.vercel.app/" : project.liveUrl,
  })),
  {
    id: "daddy-bons-kitchen", index: "03", title: "Daddy Bons Kitchen", category: "Full-stack product",
    summary: "A food ordering experience with scheduled reservations at its core.",
    roleSummary: undefined, status: null, githubUrl: null, liveUrl: null, caseStudy: false,
  },
  {
    id: "lucent", index: "04", title: "Lucent", category: "Full-stack product",
    summary: "A trading journal that brings trade organization, market context, and analytics into focus.",
    roleSummary: undefined, status: null, githubUrl: null, liveUrl: null, caseStudy: false,
  },
];

const categories = ["All work", ...Array.from(new Set(projects.map((project) => project.category)))];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All work");
  const filteredProjects = useMemo(
    () => activeCategory === "All work" ? projects : projects.filter((project) => project.category === activeCategory),
    [activeCategory],
  );

  return (
    <section id="work" className="section-shell work-section" aria-labelledby="work-title">
      <div className="page-shell">
        <SectionHeader id="work-title" number="01" title="Selected work" aside="Four projects">
          Forecasting, booking, ordering, and trading tools — a selection of work across interfaces and systems.
        </SectionHeader>
        <div className="work-toolbar" role="group" aria-label="Filter projects by category">
          <span className="work-count" aria-live="polite">{String(filteredProjects.length).padStart(2, "0")} projects</span>
          {categories.map((category) => <button key={category} type="button" className="project-filter" aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)}>{category}</button>)}
        </div>
        <div className="showcase-grid">
          {filteredProjects.map((project) => (
            <article className={`showcase-item showcase-${project.id}`} key={project.id}>
              <div className={`showcase-visual showcase-visual-${project.id}`}>
                {project.id === "foodcast" ? (
                  <Image src="/projects/foodcastt.png" alt="Foodcast food price forecasting interface" fill sizes="(max-width: 700px) 100vw, 70vw" />
                ) : (
                  <div className="showcase-concept"><span>{project.title}</span><small>Concept artwork</small></div>
                )}
              </div>
              <div className="showcase-copy">
                <p className="project-meta"><span>{project.category}</span><span>{project.index}</span></p>
                <h3 className="project-title">{project.caseStudy ? <Link href={`/work/${project.id}`}>{project.title}</Link> : project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                {project.roleSummary && <p className="project-role">Contribution: {project.roleSummary}</p>}
                {project.status && <p className="project-status">{project.id === "supremo-barber" ? "Source available" : project.status}</p>}
                <div className="project-actions">
                  {project.caseStudy && <Link className="text-link" href={`/work/${project.id}`}>Case study</Link>}
                  {project.githubUrl && <a className="text-link" href={project.githubUrl} target="_blank" rel="noreferrer">Source code</a>}
                  {project.liveUrl && <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">Live project</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}