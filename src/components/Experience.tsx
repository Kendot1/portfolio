import { experience } from "@/data/credentials";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="section-shell credentials-section" aria-labelledby="experience-title">
      <div className="page-shell">
        <SectionHeader id="experience-title" number="03" title="Experience" />
        <div className="credentials-list">
          {experience.map((entry) => (
            <article className="credentials-entry" key={entry.role}>
              <div className="credentials-heading"><h3>{entry.role}</h3><span>{entry.period}</span></div>
              <p className="credentials-meta">{entry.organization}</p>
              <p>{entry.description}</p>
              {entry.responsibilities.length > 0 && <ul>{entry.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>}
              {entry.technologies.length > 0 && <ul className="credentials-tags" aria-label="Technologies">{entry.technologies.map((item) => <li key={item}>{item}</li>)}</ul>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
