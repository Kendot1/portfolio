import Link from "next/link";
import { featuredProjects, skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="stack" className="stack-section" aria-labelledby="stack-title">
      <div className="section-heading-line"><span>02</span><h2 id="stack-title">Tech stack</h2></div>
      <p className="stack-intro">Tools I use to build interfaces, APIs and forecasting workflows.</p>
      <div className="stack-list">
        {skillGroups.map((group) => <article key={group.id}>
          <div><h3>{group.title}</h3><p>{group.note}</p></div>
          <div>
            <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            {group.evidence.length > 0 && <div className="stack-evidence">{featuredProjects.filter(({ id }) => group.evidence.includes(id)).map(({ id, title }) => <Link className="folio-text-link" key={id} href={`/work/${id}`}>{title} case study</Link>)}</div>}
          </div>
        </article>)}
      </div>
    </section>
  );
}
