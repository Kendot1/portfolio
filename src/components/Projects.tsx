"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
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
    <section id="work" className="section-shell work-section" aria-labelledby="work-title">
      <div className="page-shell">
        <SectionHeader id="work-title" number="01" title="Selected work" aside="Two projects, end to end">
          A forecasting thesis and a booking platform. Each case study separates verified implementation from unverified outcomes.
        </SectionHeader>
        <div className="work-toolbar" role="group" aria-label="Filter projects by category">
          <span className="work-count" aria-live="polite">{String(filteredProjects.length).padStart(2, "0")} projects</span>
          {categories.map((category) => <button key={category} type="button" className="project-filter" aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)}>{category}</button>)}
        </div>
        <div className="project-list">
          {filteredProjects.map((project) => (
            <article className={`project-row ${project.id === "foodcast" ? "project-row-foodcast" : ""}`} key={project.id}>
              <Link className="project-art-link" href={`/work/${project.id}`}>
                <ProjectArtwork project={project} />
              </Link>
              <div className="project-card-content">
                <p className="project-meta"><span>{project.category}</span><span>{project.index}</span></p>
                <h3 className="project-title"><Link href={`/work/${project.id}`}>{project.title}</Link></h3>
                <p className="project-summary">{project.summary}</p>
                {project.roleSummary && <p className="project-role">Contribution: {project.roleSummary}</p>}
                <p className="project-status">{project.status ?? "Implementation documented · business outcomes not verified"}</p>
                <div className="project-actions">
                  <Link className="text-link" href={`/work/${project.id}`}>Case study</Link>
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
