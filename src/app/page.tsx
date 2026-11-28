import EditorialHero from "@/components/EditorialHero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { education, experience } from "@/data/credentials";

export default function Home() {
  return (
    <div className="content-shell">
      <EditorialHero />
      <Projects />
      <Skills />
      <section id="experience" className="folio-section" aria-labelledby="experience-title">
        <div className="section-heading-line"><span>03</span><h2 id="experience-title">Experience & education</h2></div>
        <div className="timeline-list">
          {experience.map((item) => <article className="timeline-entry" key={item.organization}><div className="timeline-title"><h3>{item.role}</h3>{item.role === "AI Intern" && <span>{item.period}</span>}</div><p className="timeline-place">{item.organization}</p><p>{item.role === "Lead Developer" ? "Developed the interface, forecasting workflows and data integration for the FOODCAST thesis." : item.description}</p></article>)}
          <article id="education" className="timeline-entry"><div className="timeline-title"><h3>{education.school}</h3><span>{education.period}</span></div><p className="timeline-place">Bachelor of Science in Computer Science</p><p>Consistent Dean’s Lister through third year.</p></article>
        </div>
      </section>
      <Certifications />
      <section id="about" className="folio-section" aria-labelledby="about-title">
        <div className="section-heading-line"><span>05</span><h2 id="about-title">About</h2></div>
        <About />
      </section>
      <Contact />
    </div>
  );
}
