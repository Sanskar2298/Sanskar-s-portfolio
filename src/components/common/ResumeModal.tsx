import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, ArrowUpRight, Terminal, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { PERSONAL_DATA, EXPERIENCES, PROJECTS, ACHIEVEMENTS, SKILL_DOMAINS } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  // ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
          {/* Overlay backdrop click to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0b0b0e] border border-white/15 shadow-2xl overflow-hidden rounded-sm my-auto"
          >
            {/* Header Control Bar */}
            <div className="flex items-center justify-between px-5 sm:px-8 py-3.5 bg-[#101014] border-b border-white/10 text-xs font-mono text-[#808088]">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-[#f5f2eb] font-semibold tracking-wider uppercase">
                  TECHNICAL RESUME LEDGER // 2028
                </span>
                <span className="hidden sm:inline text-white/20">|</span>
                <span className="hidden sm:inline text-[11px] text-[#606068]">NIT HAMIRPUR • SWE</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono border border-white/15 hover:border-amber-400/70 text-[#d4d0c7] hover:text-amber-300 transition-colors"
                  title="Print or Save as PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">PRINT / PDF</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-1 text-[#808088] hover:text-white border border-white/10 hover:border-white/25 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Scrollable Content Body (Printable target) */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-0 print:bg-white print:text-black">
              {/* Profile Header */}
              <div className="border-b border-white/10 pb-6">
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <div>
                    <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#f5f2eb] tracking-tight uppercase">
                      {PERSONAL_DATA.fullName}
                    </h1>
                    <p className="text-sm font-mono text-amber-400 mt-0.5">
                      {PERSONAL_DATA.title}
                    </p>
                  </div>
                  <div className="text-xs font-mono text-[#808088] flex flex-col items-start sm:items-end gap-1">
                    <a
                      href={`mailto:${PERSONAL_DATA.email}`}
                      className="hover:text-amber-300 transition-colors"
                    >
                      {PERSONAL_DATA.email}
                    </a>
                    <span>{PERSONAL_DATA.location}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-4 text-[11px] font-mono text-[#a0a0a8]">
                  <a
                    href={PERSONAL_DATA.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-amber-300 transition-colors"
                  >
                    <GithubIcon className="w-3 h-3 text-amber-400" /> GitHub
                  </a>
                  <span className="text-white/20">•</span>
                  <a
                    href={PERSONAL_DATA.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-amber-300 transition-colors"
                  >
                    <LinkedinIcon className="w-3 h-3 text-amber-400" /> LinkedIn
                  </a>
                  <span className="text-white/20">•</span>
                  <a
                    href={PERSONAL_DATA.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-amber-300 transition-colors"
                  >
                    <Terminal className="w-3 h-3 text-amber-400" /> LeetCode & GFG (450+)
                  </a>
                </div>
              </div>

              {/* Education Ledger */}
              <div>
                <div className="text-[11px] font-mono text-amber-400 tracking-widest uppercase mb-3 flex items-center gap-2">
                  <span>[01] ACADEMIC FOUNDATION</span>
                  <span className="h-px bg-white/10 flex-1" />
                </div>
                <div className="border border-white/10 bg-[#0e0e12] p-4 flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <h3 className="font-display font-semibold text-base text-[#f5f2eb]">
                      {PERSONAL_DATA.college}
                    </h3>
                    <div className="text-xs font-mono text-[#a0a0a8] mt-0.5">
                      {PERSONAL_DATA.degree}
                    </div>
                  </div>
                  <div className="text-right font-mono text-xs">
                    <div className="text-amber-400 font-bold">
                      CGPA: {PERSONAL_DATA.cgpa} / 10.0
                    </div>
                    <div className="text-[#606068]">
                      Batch 2024 – 2028
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Experience */}
              <div>
                <div className="text-[11px] font-mono text-amber-400 tracking-widest uppercase mb-3 flex items-center gap-2">
                  <span>[02] ENGINEERING EXPERIENCE</span>
                  <span className="h-px bg-white/10 flex-1" />
                </div>
                <div className="space-y-4">
                  {EXPERIENCES.map((exp) => (
                    <div
                      key={exp.id}
                      className="border border-white/10 bg-[#0e0e12] p-4 sm:p-5"
                    >
                      <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
                        <div>
                          <span className="font-display font-semibold text-sm sm:text-base text-[#f5f2eb]">
                            {exp.role}
                          </span>
                          <span className="text-xs font-mono text-amber-400/90 ml-2">
                            @ {exp.organization}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-[#606068]">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-1.5 mt-3">
                        {exp.description.map((bullet, bi) => (
                          <li key={bi} className="flex items-start gap-2 text-xs font-sans text-[#a09c96] leading-relaxed">
                            <span className="text-amber-400 font-mono mt-0.5">→</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/6">
                        {exp.skills.map((s) => (
                          <span key={s} className="text-[10px] font-mono text-[#606068] bg-black/40 px-1.5 py-0.5 border border-white/5">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Flagship Projects */}
              <div>
                <div className="text-[11px] font-mono text-amber-400 tracking-widest uppercase mb-3 flex items-center gap-2">
                  <span>[03] SELECTED SYSTEMS & ARCHITECTURES</span>
                  <span className="h-px bg-white/10 flex-1" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PROJECTS.map((p) => (
                    <div
                      key={p.id}
                      className="border border-white/10 bg-[#0e0e12] p-4 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-[10px] font-mono text-amber-400 mb-1">
                          <span>{p.category}</span>
                          {p.featured && <span className="bg-amber-400/10 px-1 py-0.5 border border-amber-400/30">FLAGSHIP</span>}
                        </div>
                        <h4 className="font-display font-semibold text-sm text-[#f5f2eb]">
                          {p.title.split('—')[0].trim()}
                        </h4>
                        <p className="text-[11px] font-mono text-[#808088] mt-0.5 mb-2">
                          {p.tagline}
                        </p>
                        <p className="text-xs font-sans text-[#707070] leading-relaxed line-clamp-3">
                          {p.description}
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-white/6 flex items-center justify-between text-[10px] font-mono">
                        <span className="text-[#505058]">{p.technologies.slice(0, 3).join(' • ')}</span>
                        {p.liveUrl && (
                          <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline flex items-center gap-0.5">
                            DEMO <ArrowUpRight className="w-2.5 h-2.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Capabilities Grid */}
              <div>
                <div className="text-[11px] font-mono text-amber-400 tracking-widest uppercase mb-3 flex items-center gap-2">
                  <span>[04] TECHNICAL CAPABILITIES</span>
                  <span className="h-px bg-white/10 flex-1" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SKILL_DOMAINS.map((domain) => (
                    <div key={domain.id} className="border border-white/10 bg-[#0e0e12] p-3.5">
                      <div className="text-xs font-display font-semibold text-[#f5f2eb] mb-1">
                        {domain.name}
                      </div>
                      <div className="space-y-1 text-[11px] font-mono text-[#808088]">
                        {domain.competencies.map((c, ci) => (
                          <div key={ci} className="flex items-center justify-between py-0.5 border-b border-white/3 last:border-b-0">
                            <span className="text-[#c4c0b5]">{c.title.split('(')[0].trim()}</span>
                            <span className="text-[10px] text-amber-400/80">{c.focus}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recognition & Honors */}
              <div>
                <div className="text-[11px] font-mono text-amber-400 tracking-widest uppercase mb-3 flex items-center gap-2">
                  <span>[05] HONORS & ACHIEVEMENTS</span>
                  <span className="h-px bg-white/10 flex-1" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ACHIEVEMENTS.map((ach) => (
                    <div key={ach.id} className="border border-white/10 bg-[#0e0e12] p-3 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                          <span className="text-amber-400 font-bold">{ach.metric || ach.badge}</span>
                          <span className="text-[#505058]">{ach.date}</span>
                        </div>
                        <h5 className="font-display font-semibold text-xs text-[#f5f2eb]">
                          {ach.title}
                        </h5>
                        <p className="text-[11px] font-mono text-[#808088] mt-0.5">
                          {ach.issuer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Action Strip */}
            <div className="px-6 py-4 bg-[#101014] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#808088]">
              <span>STATUS: ELIGIBLE FOR FULL-TIME / CONTRACT DISPATCH</span>
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${PERSONAL_DATA.email}`}
                  className="btn-studio-primary text-[11px] py-1.5 px-3"
                >
                  <Mail className="w-3 h-3" /> EMAIL SANSKAR
                </a>
                <button
                  onClick={onClose}
                  className="btn-studio-secondary text-[11px] py-1.5 px-3"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
