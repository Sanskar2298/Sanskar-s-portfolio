import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenResume?: () => void;
}

const NAV_ITEMS = [
  { index: '01', name: 'OVERVIEW', href: '#hero' },
  { index: '02', name: 'ABOUT', href: '#about' },
  { index: '03', name: 'SYSTEMS', href: '#projects' },
  { index: '04', name: 'CAPABILITIES', href: '#skills' },
  { index: '05', name: 'TIMELINE', href: '#experience' },
  { index: '06', name: 'RECOGNITION', href: '#achievements' },
  { index: '07', name: 'CONTACT', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 border-b ${isScrolled
          ? 'bg-[#080808]/95 backdrop-blur-md border-white/[0.08]'
          : 'bg-[#080808]/80 backdrop-blur-sm border-white/[0.05]'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Studio Brand Mark & Location Coordinates */}
          <a
            href="#hero"
            className="flex items-center gap-3 group text-decoration-none"
          >
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-base tracking-tight text-[#f5f2eb] group-hover:text-amber-400 transition-colors">
                SANSKAR
              </span>
              <span className="text-[10px] font-mono text-[#808088] hidden sm:inline-block border-l border-white/10 pl-2">
                SWE // NIT HAMIRPUR '28
              </span>
            </div>
          </a>

          {/* Editorial Monospace Index Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => {
              const targetId = item.href.slice(1);
              const isActive = activeSection === targetId;

              return (
                <a
                  key={item.index}
                  href={item.href}
                  className={`group flex items-center gap-1.5 text-xs font-mono tracking-wider transition-colors py-1 ${isActive ? 'text-amber-400' : 'text-[#808088] hover:text-[#f5f2eb]'
                    }`}
                >
                  <span className={`text-[10px] ${isActive ? 'text-amber-400' : 'text-[#505058] group-hover:text-[#808088]'}`}>
                    [{item.index}]
                  </span>
                  <span className="studio-link">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Status & Direct Action Buttons */}
          <div className="flex items-center gap-3 lg:gap-5">
            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[2px] border border-white/15 hover:border-amber-400/80 text-xs font-mono text-[#e5e3dc] hover:text-amber-300 transition-colors"
            >
              <span>RESUME</span>
              <ArrowUpRight className="w-3 h-3 text-[#808088]" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#a0a0a8] hover:text-white border border-white/10 rounded-[2px]"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden bg-[#0a0a0c] border-b border-white/10 px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              <div className="text-[10px] font-mono text-[#606068] tracking-widest uppercase">
                // NAVIGATION INDEX
              </div>
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.index}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 border-b border-white/[0.05] text-sm font-mono text-[#d4d0c7] hover:text-amber-400"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xs text-[#606068]">[{item.index}]</span>
                    <span>{item.name}</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#606068]" />
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <div className="text-[11px] font-mono text-[#808088] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  STATUS: AVAILABLE FOR 2027 SUMMER INTERN ROLES
                </div>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume?.();
                  }}
                  className="btn-studio-secondary w-full text-center mt-2"
                >
                  VIEW TECHNICAL RESUME LEDGER →
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-studio-primary w-full text-center"
                >
                  TRANSMIT MESSAGE →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
