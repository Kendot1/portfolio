import { featuredProjects } from "@/data/portfolio";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="project-section" aria-labelledby="projects-title">
      <div className="section-heading-line"><h2 id="projects-title">Selected projects</h2><span>03</span></div>
      <div className="project-list">
        {featuredProjects.map((project) => (
          <article className={"project-entry project-" + project.id} key={project.id}>
            <div className="project-image">
              {project.id === "foodcast" ? <Image src="/projects/foodcastt.png" alt="Foodcast application screenshot showing its food-price forecasting interface" width={1914} height={836} priority sizes="(max-width: 700px) 100vw, (max-width: 1050px) 40vw, 42vw" /> : <div className="project-placeholder" role="img" aria-label={project.title + " screenshot placeholder"}><span>{project.title}</span><small>Project screenshot placeholder</small></div>}
              <span className="project-kind">{project.category}</span>
            </div>
            <div className="project-details">
              <div className="project-name-line"><h3>{project.title}</h3><span>{project.status}</span></div>
              <p>{project.summary}</p>
              <details className="project-long-details">
                <summary>Details</summary>
                <div>
                  {project.id === "foodcast" && <><p className="project-evidence">{project.approach}</p><p>{project.engineering}</p><p>{project.aiIntegration}</p><p>{project.results}</p></>}
                  {project.id === "supremo-barber" && <><p className="project-evidence">{project.approach}</p><p>{project.engineering}</p><p>{project.results}</p></>}
                  {project.id === "veyra" && <p className="project-evidence">AI-assisted applicant tracking system. Details to verify before publication.</p>}
                </div>
              </details>
              {project.techStack.length > 0 && <ul className="project-tech" aria-label={project.title + " technologies"}>{project.techStack.slice(0, 8).map((tech) => <li key={tech}>{tech}</li>)}</ul>}
              <div className="project-links">
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live project</a>}
                {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">Source code</a>}
                {project.id === "veyra" && <span>Screenshot and project links not provided</span>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
