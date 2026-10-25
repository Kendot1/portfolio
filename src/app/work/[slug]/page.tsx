import type { Metadata } from "next";
import Link from "next/link";
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
          <Link className="case-back" href="/#work"><FiArrowLeft aria-hidden="true" /> Back to selected work</Link>
          <p className="case-kicker">{project.index} / {project.category}</p>
          <h1 className="case-title">{project.title}</h1>
          <p className="case-summary">{project.summary}</p>
          {project.status && <p className="project-status">{project.status}</p>}
          {project.techStack.length > 0 && <div className="case-tags" aria-label="Technologies">{project.techStack.map((tech) => <span className="project-tag" key={tech}>{tech}</span>)}</div>}
          <div className="case-actions">
            {project.liveUrl && <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noreferrer">Open project <FiExternalLink aria-hidden="true" /></a>}
            {project.githubUrl && <a className="button" href={project.githubUrl} target="_blank" rel="noreferrer">Source code <FiArrowUpRight aria-hidden="true" /></a>}
          </div>
        </header>
        <div className="case-artwork"><ProjectArtwork project={project} /></div>
        <div className="case-content">
          {project.flow && <ol className="architecture-flow" aria-label="System data flow">{project.flow.map((step) => <li key={step}>{step}</li>)}</ol>}
          <div className="case-grid">
            <section className="case-section"><h2>Project overview</h2><p>{project.summary}</p></section>
            <section className="case-section"><h2>Context</h2><p>{project.context}</p></section>
            <section className="case-section"><h2>Documented approach</h2><p>{project.approach}</p></section>
            <section className="case-section"><h2>Role</h2><p>{project.role ?? "Individual responsibilities are not documented sufficiently to claim sole ownership or a specific role."}</p></section>
            {project.architecture && <section className="case-section"><h2>Architecture</h2><p>{project.architecture}</p></section>}
            <section className="case-section"><h2>Technology</h2><p>{project.technologyRationale ?? (project.techStack.length ? project.techStack.join(", ") : "Technology choices are not documented in the current project notes.")}</p></section>
            {project.engineering && <section className="case-section"><h2>Engineering decisions</h2><p>{project.engineering}</p></section>}
            {project.aiIntegration && <section className="case-section"><h2>AI integration</h2><p>{project.aiIntegration}</p></section>}
            <section className="case-section"><h2>Results</h2><p>{project.results ?? "Evaluation and outcome details are not documented in the current notes. No performance claims are made on this page."}</p></section>
            <section className="case-section"><h2>Lessons and next steps</h2><p>{project.nextSteps ?? "Implementation challenges and lessons can be added when verified project material is available."}</p></section>
          </div>
          <p className="case-note">This case study is limited to information currently recorded for the project.</p>
        </div>
      </div>
    </article>
  );
}
