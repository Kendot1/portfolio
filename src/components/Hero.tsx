import ForecastCompanion from "@/components/ForecastCompanion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { contactLinks } from "@/data/portfolio";

export default function Hero() {
  const github = contactLinks.find((link) => link.label === "GitHub");

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="page-shell hero-inner">
        <div className="hero-copy-block">
          <p className="hero-identity">Full-stack development <span>·</span> AI engineering</p>
          <h1 id="hero-title">Kenneth Bitun</h1>
          <p className="hero-intro">From an idea to a working system.</p>
          <p className="hero-copy">I’m a computer science student building across interfaces, APIs, data, and machine learning. I like understanding how the pieces fit together, then making them useful.</p>
          <div className="hero-links">
            {github && <a className="hero-profile-link" href={github.href} target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> GitHub <FiArrowUpRight aria-hidden="true" /></a>}
            <a className="hero-profile-link" href="#work">Selected projects <FiArrowUpRight aria-hidden="true" /></a>
            <a className="hero-profile-link" href="#explore">Explore the console <FiArrowUpRight aria-hidden="true" /></a>
            <a className="hero-profile-link" href="#contact">Contact <FiArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
        <ForecastCompanion />
      </div>
    </section>
  );
}
