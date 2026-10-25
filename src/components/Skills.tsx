import Link from "next/link";
import { featuredProjects, skillGroups } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="expertise" className="section-shell" aria-labelledby="expertise-title">
      <div className="page-shell">
        <SectionHeader id="expertise-title" number="02" title="Expertise" aside="Across the system">
          Organized by what I build, with project evidence where it is available. Learning and practice are labeled separately.
        </SectionHeader>
        <div className="expertise-grid">
          {skillGroups.map((group) => {
            const evidence = group.evidence.map((id) => featuredProjects.find((project) => project.id === id)).filter((project): project is (typeof featuredProjects)[number] => Boolean(project));
            return (
              <article className="expertise-row" key={group.id}>
                <div><h3 className="expertise-title">{group.title}</h3><p className="expertise-note">{group.note}</p></div>
                <ul className="expertise-skills">{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
                <div className="expertise-evidence">
                  {evidence.length ? <><span className="evidence-label">Project evidence</span>{evidence.map((project) => <Link key={project.id} href={"/work/" + project.id}>{project.title}</Link>)}</> : <span className="evidence-label">Learning & practice</span>}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
