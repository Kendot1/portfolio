import Link from "next/link";
import { contactLinks } from "@/data/portfolio";

export default function Footer() {
  const github = contactLinks.find((link) => link.label === "GitHub");
  return (
    <footer className="site-footer">
      <div className="page-shell footer-row">
        <Link className="wordmark" href="/#home"><span className="wordmark-mark">KB</span><span>Kenneth Bitun</span></Link>
        <span className="footer-tagline">Software that connects every layer.</span>
        {github && <a className="footer-back" href={github.href} target="_blank" rel="noreferrer">GitHub</a>}
        <span className="footer-copy">&copy; {new Date().getFullYear()} Kenneth Bitun</span>
        <Link className="footer-back" href="/#home">Back to top ↑</Link>
      </div>
    </footer>
  );
}
