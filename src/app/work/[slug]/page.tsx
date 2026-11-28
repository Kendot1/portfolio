import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import { featuredProjects } from "@/data/portfolio";
import ProjectArtwork from "@/components/ProjectArtwork";

type PageProps = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return featuredProjects.map((project) => ({ slug: project.id })); }
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredProjects.find((item) => item.id === slug);
  if (!project) return { title: "Project not found" };
  return { title: project.title, description: project.summary, openGraph: { title: project.title + " — Kenneth Bitun", description: project.summary, type: "article" } };
}
export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = featuredProjects.find((item) => item.id === slug);
  if (!project) notFound();
  return (
    <article className="case-page">
      <div className="page-shell">
        <header className="case-hero">
          <Link className="case-back" href="/#projects"><FiArrowLeft aria-hidden="true" /> Back to selected work</Link>
          <p className="case-kicker">{project.index} / {project.category}</p>
          <h1 className="case-title">{project.title}</h1>
          <p className="case-summary">{project.summary}</p>
          {project.status && <p className="project-status">{project.status}</p>}
          <div className="case-actions">
            {project.liveUrl && <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noreferrer">Open project <FiExternalLink aria-hidden="true" /></a>}
            {project.githubUrl && <a className="button" href={project.githubUrl} target="_blank" rel="noreferrer">Source code <FiArrowUpRight aria-hidden="true" /></a>}
          </div>
        </header>
        <div className="case-artwork"><ProjectArtwork project={project} /></div>
        <div className="case-content">
          {project.flow && <ol className="architecture-flow" aria-label="System data flow">{project.flow.map((step) => <li key={step}>{step}</li>)}</ol>}
          <div className="case-grid">
            <section className="case-section"><h2>Contribution</h2><p>{project.role ?? "Individual responsibilities aren’t documented in the available project material."}</p></section>
            <section className="case-section"><h2>{project.id === "foodcast" ? "Forecasting question & data" : "Booking & management"}</h2><p>{project.context}</p></section>
            <section className="case-section"><h2>Documented approach</h2><p>{project.approach}</p></section>
            {project.architecture && <section className="case-section"><h2>Architecture</h2><p>{project.architecture}</p></section>}
            {project.engineering && <section className="case-section"><h2>Engineering decisions</h2><p>{project.engineering}</p></section>}
            {project.aiIntegration && <section className="case-section"><h2>AI integration</h2><p>{project.aiIntegration}</p></section>}
            <section className="case-section"><h2>Results</h2><p>{project.results ?? "Evaluation and outcome details are not documented in the current notes. No performance claims are made on this page."}</p></section>
            <section className="case-section"><h2>Lessons and next steps</h2><p>{project.nextSteps ?? "Implementation challenges and lessons can be added when verified project material is available."}</p></section>
          </div>
          {project.id === "supremo-barber" && <figure className="project-art booking-plate case-workspace">
            <Image className="project-cover-image" src="/projects/supremo-workspace.webp" alt="Customer appointments workspace with an empty schedule and a Book appointment button" width={1170} height={590} unoptimized />
            <figcaption>Customer appointments workspace · empty test account</figcaption>
          </figure>}
          {project.techStack.length > 0 && <section className="case-section"><h2>Built with</h2><p>{project.technologyRationale}</p><ul className="case-tags" aria-label="Technologies">{project.techStack.map((tech) => <li className="project-tag" key={tech}>{tech}</li>)}</ul></section>}
          <Link className="folio-text-link" href="/#contact">Contact Kenneth</Link>
        </div>
      </div>
    </article>
  );
}
