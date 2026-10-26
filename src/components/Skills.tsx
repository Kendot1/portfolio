import Link from "next/link";
import { featuredProjects, skillGroups } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="stack" className="section-shell" aria-labelledby="expertise-title">
      <div className="page-shell">
        <SectionHeader id="expertise-title" number="02" title="Stack" aside="Tools used in projects">
          A short, evidence-led list. Each group links to work where the tools appear.
        </SectionHeader>
        <div className="expertise-grid">
          {skillGroups.slice(0, 3).map((group) => {
            const evidence = group.evidence.map((id) => featuredProjects.find((project) => project.id === id)).filter((project): project is (typeof featuredProjects)[number] => Boolean(project));
            return (
              <article className="expertise-row" key={group.id}>
                <div><h3 className="expertise-title">{group.title}</h3><p className="expertise-note">{group.note}</p></div>
                <ul className="expertise-skills">{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
                <div className="expertise-evidence">
                  <span className="evidence-label">Used in</span>
                  {evidence.map((project) => <Link key={project.id} href={`/work/${project.id}`}>{project.title}</Link>)}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
