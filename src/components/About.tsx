import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="section-shell" aria-labelledby="about-title">
      <div className="page-shell">
        <SectionHeader id="about-title" number="03" title="About" />
        <div className="about-copy">
          <div>
            <h3 className="about-statement">Computer science student. Full-stack builder.</h3>
            <p className="about-body">I’m interested in useful products where interface, application logic, data, and machine learning meet. I like making the system understandable—not just making the screen work.</p>
            <p className="about-body">My project work includes a food-price forecasting thesis and an appointment platform. I’m still learning, and I try to be clear about what the code proves and what it doesn’t.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

