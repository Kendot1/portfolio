import { experience } from "@/data/credentials";

export default function Experience() {
  return (
    <div className="timeline-list">
      {experience.map((entry) => <article className="timeline-entry" key={entry.role}>
        <div className="timeline-title"><h3>{entry.role}</h3><span>{entry.period}</span></div>
        <p className="timeline-place">{entry.organization}</p>
        <p>{entry.description}</p>
        {entry.responsibilities.length > 0 && <ul>{entry.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>}
      </article>)}
    </div>
  );
}
