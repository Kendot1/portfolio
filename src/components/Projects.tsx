import { featuredProjects } from "@/data/portfolio";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="project-section" aria-labelledby="projects-title">
      <div className="section-heading-line"><h2 id="projects-title">Selected projects</h2><span>03</span></div>
      <div className="project-list">
        {featuredProjects.map((project) => (
          <article className={"project-entry project-" + project.id} key={project.id}>
            <div className="project-image">
              {project.id === "foodcast" ? <Image src="/projects/foodcastt.png" alt="Foodcast interface screenshot" width={1914} height={836} priority sizes="(max-width: 700px) 100vw, 360px" /> : <div className="project-placeholder"><span>{project.title}</span><small>Replace with a project screenshot</small></div>}
              <span className="project-kind">{project.category}</span>
            </div>
            <div className="project-details">
              <div className="project-name-line"><h3>{project.title}</h3><span>{project.status}</span></div>
              <p>{project.summary}</p>
              {project.id !== "veyra" && <p className="project-evidence">{project.id === "foodcast" ? "Python forecasting workflow with PyTorch and LightGBM; Next.js client reads forecast data through Supabase." : "React workspaces connect to a typed Hono API, with booking rules and access checks enforced server-side."}</p>}
              <ul className="project-tech" aria-label={project.title + " technologies"}>{project.techStack.slice(0, 8).map((tech) => <li key={tech}>{tech}</li>)}</ul>
              <div className="project-links">
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live project</a>}
                {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">Source code</a>}
                {project.id === "veyra" && <span>Project details to confirm</span>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
