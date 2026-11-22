import { education } from "@/data/credentials";
import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <section id="education" className="section-shell credentials-section" aria-labelledby="education-title">
      <div className="page-shell">
        <SectionHeader id="education-title" number="04" title="Education" />
        <div className="credentials-list">
          <div className="credentials-heading"><h3>{education.school}</h3><span>{education.period}</span></div>
          <p className="credentials-meta">{education.program}</p>
          <h4>Academic honors</h4>
          {education.honors.map((honor) => <div className="credentials-heading credentials-record" key={honor.title}><strong>{honor.title}</strong><span>{honor.period}</span></div>)}
          <h4>Competition achievements</h4>
          {education.competitions.map((competition) => (
            <details className="credentials-competition" key={competition.title}>
              <summary><strong>{competition.title}</strong><span>{competition.period}</span></summary>
              <p>{competition.description}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
