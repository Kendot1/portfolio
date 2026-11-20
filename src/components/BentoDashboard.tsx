import Image from "next/image";
import Link from "next/link";
import { FiArrowDownRight, FiArrowUpRight, FiCode, FiGithub, FiTerminal } from "react-icons/fi";
import { SiNextdotjs, SiPython, SiPytorch, SiReact, SiSupabase, SiTypescript } from "react-icons/si";
import ForecastCompanion from "./ForecastCompanion";

const tools = [
  { name: "Next.js", Icon: SiNextdotjs }, { name: "React", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript }, { name: "Python", Icon: SiPython },
  { name: "PyTorch", Icon: SiPytorch }, { name: "Supabase", Icon: SiSupabase },
];

export default function BentoDashboard() {
  return (
    <section id="home" className="bento-grid" aria-label="Portfolio introduction">
      <div className="bento-panel bento-intro">
        <p className="bento-eyebrow">Hi, I’m Kenneth.</p>
        <h1>Kenneth Bitun</h1>
        <p className="bento-role">Full-Stack Developer &amp; Aspiring AI Engineer</p>
        <p className="bento-statement">Ideas are better when they work.</p>
        <p className="bento-copy">I’m a computer science student building across interfaces, APIs, data, and machine learning. I like understanding how the pieces fit together, then making them useful.</p>
        <a className="bento-inline-link" href="#work">See selected work <FiArrowDownRight aria-hidden="true" /></a>
      </div>
      <Link className="bento-panel bento-foodcast" href="/work/foodcast">
        <Image src="/foodcast-cover.webp" alt="" fill sizes="(max-width: 700px) 100vw, 35vw" priority />
        <div className="bento-project-label"><span>Repository artwork · Thesis project</span><h2>Foodcast</h2><p>Forecasting, from data to interface.</p></div>
        <span className="bento-arrow" aria-hidden="true"><FiArrowUpRight /></span>
      </Link>
      <Link className="bento-panel bento-barber" href="/work/supremo-barber">
        <span className="bento-small">Full-stack product</span>
        <div className="barber-graphic" aria-hidden="true"><span>Customer</span><i /><span>Booking</span><i /><span>Barber</span></div>
        <div><h2>Supremo<br />Barber</h2><p>A booking system for three roles.</p><span className="bento-small">System diagram</span></div>
        <span className="bento-arrow" aria-hidden="true"><FiArrowUpRight /></span>
      </Link>
      <div className="bento-panel bento-dock">
        <p className="bento-small">Find your way</p>
        <div className="bento-keys">
          <a href="https://github.com/Kendot1" target="_blank" rel="noreferrer" aria-label="GitHub profile"><FiGithub aria-hidden="true" /></a>
          <a href="#explore" aria-label="Open engineering console"><FiTerminal aria-hidden="true" /></a>
          <a href="#work" aria-label="See selected work"><FiCode aria-hidden="true" /></a>
          <a href="#stack" aria-label="See technology stack"><FiArrowDownRight aria-hidden="true" /></a>
        </div>
      </div>
      <div className="bento-panel bento-character"><p className="bento-small">A little curiosity</p><ForecastCompanion /></div>
      <section className="bento-panel bento-stack" aria-labelledby="bento-stack-title">
        <div><p className="bento-small">Tools in practice</p><h2 id="bento-stack-title">The stack</h2></div>
        <div className="bento-tools">{tools.map(({ name, Icon }) => <span key={name} title={name}><Icon aria-hidden="true" /><span>{name}</span></span>)}</div>
        <a href="#stack" className="bento-inline-link">See project evidence <FiArrowDownRight aria-hidden="true" /></a>
      </section>
      <a className="bento-panel bento-lab" href="#foodcast-lab">
        <div><p className="bento-small">A hands-on experiment</p><h2>Look closer<br />at the data.</h2><p>Try a local simulation of Foodcast’s time-series features.</p></div>
        <span className="bento-lab-trace" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /></span>
        <span className="bento-arrow" aria-hidden="true"><FiArrowDownRight /></span>
      </a>
      <div className="bento-panel bento-learning"><p className="bento-small">What I’m exploring</p><h2>Interfaces, data, and models working together.</h2><p>Building and documenting the engineering decisions behind the work.</p></div>
      <div className="bento-panel bento-contact"><p className="bento-small">Get to know the work</p><h2>Let’s work together.</h2><p>Explore the projects and find my public work on GitHub.</p><a className="bento-arrow" href="https://github.com/Kendot1" target="_blank" rel="noreferrer" aria-label="Visit Kenneth’s GitHub profile"><FiArrowUpRight aria-hidden="true" /></a></div>
    </section>
  );
}
