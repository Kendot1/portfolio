import { FiArrowDown, FiArrowUpRight, FiGithub } from "react-icons/fi";
import { contactLinks } from "@/data/portfolio";

export default function Hero() {
  const github = contactLinks.find((link) => link.label === "GitHub");
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="page-shell hero-inner">
        <div className="hero-identity"><span className="identity-mark" aria-hidden="true"><i /><i /><i /></span><p>Full-stack developer<br /><span>Exploring AI engineering</span></p></div>
        <h1 id="hero-title">Kenneth Bitun</h1>
        <p className="hero-intro">I build intelligent software, from architecture to deployment.</p>
        <p className="hero-copy">I work across interfaces, application logic, data, and machine learning. I like understanding how the pieces fit together, then turning that understanding into useful products.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">Explore my work <FiArrowDown aria-hidden="true" /></a>
          <a className="button" href="#expertise">View expertise <FiArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="hero-links">
          {github && <a className="hero-profile-link" href={github.href} target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> GitHub <FiArrowUpRight aria-hidden="true" /></a>}
          <span className="hero-focus">Currently building · Foodcast</span>
        </div>
      </div>
    </section>
  );
}
