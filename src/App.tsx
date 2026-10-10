import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Interests from '@/components/sections/Interests';
import Contact from '@/components/sections/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950 text-gray-200">
      {/* Global grain texture overlay */}
      <div className="pointer-events-none fixed inset-0 z-[1] grain opacity-[0.03]" />

      {/* Skip to content for keyboard users */}
      <a href="#home" className="skip-link">
        Skip to content
      </a>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Interests />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
