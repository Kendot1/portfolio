
import EditorialHero from "@/components/EditorialHero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import About from "@/components/About";
import Contact from "@/components/Contact";
import SectionHeader from "@/components/SectionHeader";
import { education } from "@/data/credentials";

export default function Home() {
  return (
    <>
      <div className="content-shell">
        <EditorialHero />
        <section id="about" className="content-section about-section" aria-labelledby="about-title">
          <SectionHeader id="about-title" number="" title="About" aside="01" />
          <About />
        </section>
        <section id="experience" className="content-section" aria-labelledby="experience-title">
          <SectionHeader id="experience-title" number="" title="Experience & education" aside="02" />
          <Experience />
          <div className="education-brief"><h3>{education.program} · {education.school}</h3><p>{education.period}</p></div>
        </section>
        <div id="projects" className="projects-anchor"><Projects /></div>
        <div id="stack" className="stack-anchor"><Skills /></div>
        <section className="content-section credential-area" aria-label="Certifications">
          <Certifications />
        </section>
        <section id="contact" className="content-section contact-anchor" aria-label="Contact">
          <Contact />
        </section>
      </div>
    </>
  );
}
