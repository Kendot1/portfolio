import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="section-shell" aria-labelledby="about-title">
      <div className="page-shell">
        <SectionHeader id="about-title" number="03" title="About" />
        <div className="about-copy">
          <div>
            <h3 className="about-statement">I like understanding how the pieces fit together.</h3>
            <p className="about-body">I&apos;m Kenneth Bitun, a full-stack developer interested in thoughtful interfaces, backend systems, and machine learning. I&apos;m drawn to the work between an idea and a useful product: clarifying the problem, connecting the data and application logic, then making the experience easier to use.</p>
            <p className="about-body">My project work moves between web applications and forecasting experiments. I keep building my engineering foundations and want to take on problems where the product, data, and implementation all matter.</p>
          </div>
          <aside className="about-focus" aria-label="Current engineering interests">
            <span className="meta-label">Current direction</span>
            <p><strong>Product engineering</strong><br />From interface to application logic</p>
            <p><strong>Intelligent systems</strong><br />Machine learning connected to useful tools</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

