import Link from "next/link";
import { featuredProjects, skillGroups } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="stack" className="section-shell" aria-labelledby="expertise-title">
      <div className="page-shell">
        <SectionHeader id="expertise-title" number="" title="Stack" aside="Tools and technologies">
          Technologies from my published portfolio, grouped by role; project links show related work.
        </SectionHeader>
        <div className="expertise-grid">
          {skillGroups.map((group) => {
            const evidence = group.evidence.map((id) => featuredProjects.find((project) => project.id === id)).filter((project): project is (typeof featuredProjects)[number] => Boolean(project));
            return (
              <article className="expertise-row" key={group.id}>
                <div><h3 className="expertise-title">{group.title}</h3><p className="expertise-note">{group.note}</p></div>
                <ul className="expertise-skills">{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
                {evidence.length > 0 && <div className="expertise-evidence">
                  <span className="evidence-label">Related projects</span>
                  {evidence.map((project) => <Link key={project.id} href={`/work/${project.id}`}>{project.title}</Link>)}
                </div>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
