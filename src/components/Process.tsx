import { processSteps } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Process() {
  return (
    <section id="how-i-build" className="section-shell" aria-labelledby="process-title">
      <div className="page-shell">
        <SectionHeader id="process-title" number="04" title="How I build" aside="A working approach">
          Start with the problem. Connect the parts. Test the assumptions. Not every experiment reaches deployment; each one should teach me something.
        </SectionHeader>
        <ol className="process-list">
          {processSteps.map((step) => <li className="process-step" key={step.id}><span className="process-step-number">{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}
        </ol>
      </div>
    </section>
  );
}
