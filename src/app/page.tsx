import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { VisionMission } from "@/components/VisionMission";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Leadership } from "@/components/Leadership";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Media } from "@/components/Media";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <Projects />
      <Achievements />
      <Leadership />
      <Education />
      <Skills />
      <Certifications />
      <Media />
      <Contact />
      <Footer />
    </main>
  );
}
