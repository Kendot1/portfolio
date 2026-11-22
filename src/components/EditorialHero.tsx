import Image from "next/image";
import KBot from "./KBot";

export default function EditorialHero() {
  return <section id="home" className="editorial-hero" aria-labelledby="hero-title">
    <div className="editorial-copy">
      <p className="editorial-kicker">Hello, I’m Kenneth.</p>
      <h1 id="hero-title"><span className="hero-name-line">Kenneth Bitun</span></h1>
      <p className="editorial-role">Computer Science Student · AI Engineer · Full Stack Engineer</p>
      <p className="editorial-intro">I connect thoughtful interfaces with the systems and data behind them, building products that make complex tasks easier to understand.</p>
      <div className="editorial-actions"><a className="action-primary" href="#work">View projects</a><a className="action-secondary" href="#contact">Contact me</a></div>
    </div>
    <figure className="editorial-portrait">
      <Image src="/kenneth-portrait.png" alt="Portrait of Kenneth Bitun" width={1106} height={1422} priority sizes="(max-width: 700px) 70vw, 300px" />
    </figure>
    <KBot />
  </section>;
}
