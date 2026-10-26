import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { contactLinks } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="section-shell contact-section" aria-labelledby="contact-title">
      <div className="page-shell">
        <SectionHeader id="contact-title" number="04" title="Contact" />
        <div className="contact-panel">
          <div>
            <h3 className="contact-title">Have an idea worth building?</h3>
            <p className="contact-copy">I&apos;m interested in useful software, intelligent systems, and engineering problems that connect more than one layer. GitHub is the only verified public contact route here; email and other profiles are omitted until confirmed.</p>
          </div>
          <div className="contact-actions" aria-label="Verified professional links">
            {contactLinks.map((link) => <a className="text-link" href={link.href} key={link.label} target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> Open GitHub <FiArrowUpRight aria-hidden="true" /></a>)}
          </div>
        </div>
      </div>
    </section>
  );
}

