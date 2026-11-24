
import EditorialHero from "@/components/EditorialHero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import About from "@/components/About";
import Contact from "@/components/Contact";
import SectionHeader from "@/components/SectionHeader";
import { education } from "@/data/credentials";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Home() {
  return (
    <>
      <div className="content-shell">
        <EditorialHero />
        <AnimateOnScroll className="content-section about-section" as="section">
          <section id="about" className="about-content" aria-labelledby="about-title"><SectionHeader id="about-title" number="" title="About" aside="01" /><About /></section>
        </AnimateOnScroll>
        <AnimateOnScroll className="content-section" as="section">
          <section id="experience" aria-labelledby="experience-title">
            <SectionHeader id="experience-title" number="" title="Experience & education" aside="02" />
            <div className="timeline-list"><article className="timeline-entry"><div className="timeline-title"><h3>Computer Science student</h3><span>2023–2027 (expected)</span></div><p className="timeline-place">{education.school}</p><p>Bachelor of Science in Computer Science.</p><p className="timeline-place">Consistent Dean’s Lister through 3rd year.</p></article></div>
          </section>
        </AnimateOnScroll>
        <div className="projects-anchor"><AnimateOnScroll as="div"><Projects /></AnimateOnScroll></div>
        <div className="stack-anchor"><AnimateOnScroll as="div"><Skills /></AnimateOnScroll></div>
        <AnimateOnScroll className="content-section credential-area" as="section" aria-label="Certifications"><Certifications /></AnimateOnScroll>
        <AnimateOnScroll className="content-section contact-anchor" as="section" aria-label="Contact"><Contact /></AnimateOnScroll>
      </div>
    </>
  );
}
