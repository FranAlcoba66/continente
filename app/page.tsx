import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Process from "@/components/Process";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <Process />
      <About />
      <Contact />
    </main>
  );
}
