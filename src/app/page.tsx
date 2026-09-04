import { About } from "@/components/sections/about";
import { AiEngineering } from "@/components/sections/ai-engineering";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { EducationSection } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <AiEngineering />
      <Projects />
      <Experience />
      {/* Renders only once a verified certification exists in the data. */}
      <Certifications />
      <EducationSection />
      <Contact />
    </>
  );
}
