import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="stack" className="stack-section" aria-labelledby="stack-title">
      <div className="section-heading-line"><h2 id="stack-title">Tech stack</h2><span>04</span></div>
      <p className="stack-intro">Tools connected to the projects above. This list describes project use, not proficiency ratings.</p>
      <div className="stack-list">
        {skillGroups.map((group) => <article key={group.id}>
          <div><h3>{group.title}</h3><p>{group.note}</p></div>
          <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
        </article>)}
      </div>
    </section>
  );
}
