"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import { featuredProjects } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";
import ProjectArtwork from "./ProjectArtwork";

const categories = ["All work", ...Array.from(new Set(featuredProjects.map((project) => project.category)))];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All work");
  const filteredProjects = useMemo(
    () => activeCategory === "All work" ? featuredProjects : featuredProjects.filter((project) => project.category === activeCategory),
    [activeCategory],
  );
  return (
    <section id="work" className="section-shell" aria-labelledby="work-title">
      <div className="page-shell">
        <SectionHeader id="work-title" number="01" title="Selected work" aside="Projects & experiments">
          Forecasting, full-stack applications, and the workflows that bring them together.
        </SectionHeader>
        <div className="work-toolbar">
          <span className="work-count" aria-live="polite">{String(filteredProjects.length).padStart(2, "0")} projects</span>
          <div className="project-filters" role="group" aria-label="Filter projects by category">
            {categories.map((category) => <button key={category} type="button" className="project-filter" aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)}>{category}</button>)}
          </div>
        </div>
        <div className="project-grid">
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <Link className="project-art-link" href={"/work/" + project.id}><ProjectArtwork project={project} /></Link>
              <div className="project-card-content">
                <div className="project-meta"><span>{project.category}</span><span>{project.index}</span></div>
                <h3 className="project-title"><Link href={"/work/" + project.id}>{project.title}</Link></h3>
                <p className="project-summary">{project.summary}</p>
                {project.roleSummary && <p className="project-role">Contribution: {project.roleSummary}</p>}
                {project.techStack.length > 0 && <div className="project-tags" aria-label="Technologies">{project.techStack.map((tech) => <span className="project-tag" key={tech}>{tech}</span>)}</div>}
                {project.status && <p className="project-status">{project.status}</p>}
                <div className="project-actions">
                  <Link className="text-link" href={"/work/" + project.id}>View case study <FiArrowUpRight aria-hidden="true" /></Link>
                  {project.liveUrl && <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">Open project <FiExternalLink aria-hidden="true" /></a>}
                  {project.githubUrl && <a className="text-link" href={project.githubUrl} target="_blank" rel="noreferrer">Source code <FiArrowUpRight aria-hidden="true" /></a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
