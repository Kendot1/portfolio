import Image from "next/image";
import { contactLinks, emailAddress, resumeUrl } from "@/data/portfolio";

export default function EditorialHero() {
  return (
    <section id="home" className="profile" aria-labelledby="profile-title">
      <div className="profile-copy">
        <h1 id="profile-title">Kenneth Bitun</h1>
        <p className="profile-role">Full-stack development & machine learning</p>
        <p className="profile-bio">I’m a Computer Science student at Our Lady of Fatima University. I build full-stack applications and work with data and machine learning.</p>
        <p className="profile-availability">Open to internships</p>
        <div className="profile-links">
          <a className="folio-button" href="#projects">View projects <span aria-hidden="true">↓</span></a>
          <a className="folio-text-link" href={`mailto:${emailAddress}`}>Email me</a>
        </div>
      </div>
      <aside className="profile-aside" aria-label="Professional links">
        <Image className="profile-photo-image" src="/kenneth-portrait.png" alt="Portrait of Kenneth Bitun" width={1106} height={1422} loading="eager" fetchPriority="high" sizes="(max-width: 600px) 64px, 132px" />
        <div className="profile-aside-links">
          <a href={resumeUrl}>Résumé</a>
          {contactLinks.filter(({ label }) => label === "GitHub" || label === "LinkedIn").map(({ label, href }) => <a key={label} href={href}>{label}</a>)}
        </div>
      </aside>
    </section>
  );
}
