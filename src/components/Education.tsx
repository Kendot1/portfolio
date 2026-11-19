import SectionHeader from "./SectionHeader";

// ponytail: verified data only — OLFU CS, Dean's Lister through 3rd year
const education = [
  {
    years: "2023–2027",
    title: "BS Computer Science",
    school: "Our Lady of Fatima University",
    note: "Dean's Lister through 3rd year · Expected graduation 2027",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-shell" aria-labelledby="education-title">
      <div className="page-shell">
        <SectionHeader id="education-title" number="03" title="Education" />
        <div className="education-grid">
          {education.map((entry) => (
            <div className="education-row" key={entry.title}>
              <span className="education-year">{entry.years}</span>
              <h3 className="education-title">{entry.title}</h3>
              <p className="education-school">{entry.school}</p>
              {entry.note && <p className="education-note">{entry.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
