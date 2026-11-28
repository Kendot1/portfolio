import Link from "next/link";
import { featuredProjects, additionalProjects } from "@/data/portfolio";
import ProjectArtwork from "@/components/ProjectArtwork";

export default function Projects() {
  return (
    <div id="work">
      <section id="projects" className="project-section folio-section" aria-labelledby="projects-title">
        <div className="section-heading-line"><span>01</span><h2 id="projects-title">Selected work</h2></div>
        <div className="project-list">
          {featuredProjects.filter(({ id }) => id === "foodcast" || id === "supremo-barber").map((project) => (
            <article key={project.id} className={`project-entry project-${project.id}`} aria-labelledby={`${project.id}-title`}>
              <div className="project-lede">
                <p className="folio-meta">{project.category}{project.status && ` / ${project.status}`}</p>
                <h3 id={`${project.id}-title`}>{project.title}</h3>
                <p className="project-summary-copy">{project.summary}</p>
              </div>
              <div className="project-image">
                <Link className="project-preview project-evidence-strip" href={`/work/${project.id}`}>
                  <span aria-hidden="true">{project.index}</span><span>Read the {project.title} case study</span><span aria-hidden="true">↗</span>
                </Link>
                <ProjectArtwork project={project} />
              </div>
              <div className="project-details">
                <details className="project-long-details">
                  <summary>Project notes</summary>
                  <div><p className="project-role"><strong>My contribution</strong>{project.role}</p><p>{project.approach}</p><p>{project.engineering}</p></div>
                </details>
                <div className="project-links">
                  {project.liveUrl && <a className="folio-text-link" href={project.liveUrl}>Preview</a>}
                  {project.githubUrl && <a className="folio-text-link" href={project.githubUrl}>Source</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="project-index">
          <h3>Also in my portfolio</h3>
          {additionalProjects.map(({ title, summary }) => <div key={title}><strong>{title}</strong><p>{summary}</p></div>)}
        </div>
      </section>
    </div>
  );
}
