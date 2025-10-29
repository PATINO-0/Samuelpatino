import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Timeline />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
}
