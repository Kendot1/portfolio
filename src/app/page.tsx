
import EditorialHero from "@/components/EditorialHero";
import Projects from "@/components/Projects";
import EngineeringConsole from "@/components/EngineeringConsole";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import About from "@/components/About";
import Contact from "@/components/Contact";
import SectionHeader from "@/components/SectionHeader";

export default function Home() {
  return (
    <>
      <EditorialHero />
      <Projects />
      <section id="about" className="section-shell about-page-section" aria-labelledby="about-page-title">
        <div className="page-shell">
          <SectionHeader id="about-page-title" number="02" title="About" />
          <div className="about-page-grid">
            <About />
            <Skills />
            <Experience />
            <Education />
          </div>
          <Certifications />
        </div>
      </section>
      <EngineeringConsole />
      <Contact />
    </>
  );
}
