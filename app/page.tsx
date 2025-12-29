
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <footer className="py-8 text-center text-zinc-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Venkateshwar Yadav. All rights reserved.</p>
        <p className="mt-2 text-xs">
          Built with Next.js, Tailwind CSS & Framer Motion
        </p>
      </footer>
    </main>
  );
}
