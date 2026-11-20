
import BentoDashboard from "@/components/BentoDashboard";
import Projects from "@/components/Projects";
import EngineeringConsole from "@/components/EngineeringConsole";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <BentoDashboard />
      <Projects />
      <EngineeringConsole />
      <Skills />
      <Education />
      <About />
      <Contact />
    </>
  );
}
