import Image from "next/image";
import { contactLinks } from "@/data/portfolio";

export default function EditorialHero() {
  const linkedin = contactLinks.find((link) => link.label === "LinkedIn");
  const github = contactLinks.find((link) => link.label === "GitHub");
  return (
    <section id="home" className="profile" aria-labelledby="profile-title">
      <figure className="profile-photo">
        <Image src="/kenneth-portrait.png" alt="Kenneth Bitun" width={1106} height={1422} priority sizes="(max-width: 430px) 142px, (max-width: 700px) 195px, (max-width: 1100px) 180px, 236px" />
        <figcaption>Photo</figcaption>
      </figure>
      <div className="profile-copy">
        <p className="profile-kicker">Hi, I’m Kenneth.</p>
        <h1 id="profile-title">Kenneth Bitun</h1>
        <p className="profile-role">BS Computer Science student · Aspiring full-stack and AI engineer</p>
        <p className="profile-bio">I study Computer Science at Our Lady of Fatima University and build software across web applications, data systems, and machine learning.</p>
        <p className="profile-availability">Open to internship opportunities.</p>
        <div className="profile-links"><a href="#projects">Selected projects</a><a href="#contact">Contact</a>{github && <a href={github.href} target="_blank" rel="noreferrer">GitHub</a>}{linkedin && <a href={linkedin.href} target="_blank" rel="noreferrer">LinkedIn</a>}</div>
      </div>
    </section>
  );
}
