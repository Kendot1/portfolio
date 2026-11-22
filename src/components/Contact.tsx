import { FiArrowUpRight, FiMail } from "react-icons/fi";
import { contactLinks } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className="section-shell contact-section" aria-labelledby="contact-title">
      <div className="page-shell">
        <SectionHeader id="contact-title" number="06" title="Contact" />
        <div className={styles.panel}>
          <div>
            <h3 className={styles.title}>Let’s start a conversation.</h3>
            <p className={styles.copy}>Have a project in mind, a question, or an idea to share? Get in touch by email or find me online.</p>
          </div>
          <div className={styles.links} aria-label="Contact links">
            <a className={`${styles.row} ${styles.email}`} href="mailto:kennethbitun344@gmail.com">
              <span><span className={styles.label}>Email</span><span className={styles.address}>kennethbitun344@gmail.com</span></span>
              <FiMail aria-hidden="true" />
            </a>
            {contactLinks.map((link) => (
              <a className={styles.row} href={link.href} key={link.label} target="_blank" rel="noreferrer">
                <span>{link.label}<span className={styles.srOnly}> (opens in a new tab)</span></span>
                <FiArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}