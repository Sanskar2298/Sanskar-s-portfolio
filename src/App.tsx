import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { CustomCursor } from './components/common/CustomCursor';
import { Preloader } from './components/common/Preloader';
import { ResumeModal } from './components/common/ResumeModal';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Achievements } from './components/sections/Achievements';
import { Contact } from './components/sections/Contact';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Lenis buttery smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    let animationFrameId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#080808] text-[#e5e3dc] selection:bg-amber-500/20 selection:text-amber-200" style={{ fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif" }}>
      {/* Intro Preloader Screen */}
      <Preloader onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <>
          {/* Precision reticle cursor (Desktop only) */}
          <CustomCursor />

          {/* Technical Resume Ledger Modal */}
          <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

          {/* Subtle Film Grain Noise Texture Overlay */}
          <div className="fixed inset-0 pointer-events-none z-30 grain-overlay opacity-20" />

          {/* Top Studio Navigation */}
          <Navbar onOpenResume={() => setIsResumeOpen(true)} />

          {/* Main Content Sections — strictly sequenced [01] to [07] */}
          <main className="relative z-10 bg-[#080808]">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Achievements />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
