import { certifications } from "@/data/credentials";
import SectionHeader from "./SectionHeader";

export default function Certifications() {
  return (
    <section id="certifications" className="section-shell credentials-section" aria-labelledby="certifications-title">
      <div className="page-shell">
        <SectionHeader id="certifications-title" number="04" title="Certifications" />
        <div className="certificate-grid">
          {certifications.map((certificate) => (
            <article className="certificate" key={certificate.slug}>
              <a className="certificate-preview" href={certificate.pdfUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${certificate.title} certificate PDF (opens in a new tab)`}>
                {/* Published certificate previews are hosted with their original documents. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={certificate.previewUrl} alt="" loading="lazy" />
              </a>
              <div className="credentials-heading certificate-meta"><span>{certificate.issuer}</span><span>{certificate.date}</span></div>
              <h3>{certificate.title}</h3>
              <p>{certificate.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
