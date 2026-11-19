import AnimateOnScroll from "@/components/AnimateOnScroll";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import EngineeringConsole from "@/components/EngineeringConsole";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <AnimateOnScroll><Projects /></AnimateOnScroll>
      <AnimateOnScroll><EngineeringConsole /></AnimateOnScroll>
      <AnimateOnScroll><Skills /></AnimateOnScroll>
      <AnimateOnScroll delay={80}><Education /></AnimateOnScroll>
      <AnimateOnScroll><About /></AnimateOnScroll>
      <AnimateOnScroll><Contact /></AnimateOnScroll>
    </>
  );
}
