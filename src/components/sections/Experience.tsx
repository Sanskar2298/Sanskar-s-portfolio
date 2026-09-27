import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { EXPERIENCES } from '../../data/portfolioData';

const TYPE_STYLES: Record<string, string> = {
  Internship: 'text-amber-400 border-amber-400/30 bg-amber-400/5',
  Leadership: 'text-[#a8c0a8] border-[#a8c0a8]/30 bg-[#a8c0a8]/5',
  'Open Source': 'text-[#a8b8d0] border-[#a8b8d0]/30 bg-[#a8b8d0]/5',
};

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative bg-[#080808] border-b border-white/8 px-4 sm:px-6 lg:px-8 py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header Strip */}
        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-16 pb-5 border-b border-white/8">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-amber-400 tracking-widest">[05]</span>
            <h2 className="font-display text-xs font-semibold tracking-[0.2em] text-[#f5f2eb] uppercase">
              Timeline
            </h2>
          </div>
          <span className="text-[11px] font-mono text-[#505058] tracking-wide">
            PROFESSIONAL EXPERIENCE & LEADERSHIP RECORD
          </span>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left: Thin timeline line column */}
          <div className="hidden lg:block lg:col-span-1 relative">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-white/8" />
          </div>

          {/* Right: Experience entries */}
          <div className="lg:col-span-11 flex flex-col gap-0">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 py-8 border-b border-white/6 last:border-b-0 group"
              >
                {/* Timeline dot — visible only on desktop where the line column exists */}
                <div className="hidden lg:absolute lg:block" style={{ left: '-52px', top: '36px' }}>
                  <div className={`w-2 h-2 rounded-full ${exp.current ? 'bg-amber-400' : 'bg-[#2a2a30]'} border border-white/20`} />
                </div>

                {/* Date + Meta column (3 cols) */}
                <div className="lg:col-span-3 flex flex-col gap-2">
                  <div className="text-[11px] font-mono text-[#606068]">{exp.period}</div>
                  <div className={`self-start text-[10px] font-mono px-1.5 py-0.5 border ${TYPE_STYLES[exp.type]}`}>
                    {exp.type.toUpperCase()}
                  </div>
                  {exp.current && (
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-amber-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      ONGOING
                    </div>
                  )}
                  <div className="flex items-center gap-1 text-[11px] font-mono text-[#505058] mt-1">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Main content column (9 cols) */}
                <div className="lg:col-span-9">
                  <div className="mb-4">
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#f5f2eb] tracking-tight group-hover:text-amber-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-mono text-[#808088] mt-0.5">
                      {exp.organization}
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.description.map((point, pi) => (
                      <li key={pi} className="flex gap-2.5 text-sm font-sans text-[#909090] leading-relaxed">
                        <span className="text-amber-400 font-mono shrink-0 mt-0.5 text-xs">—</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skill chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono text-[#606068] bg-[#0e0e10] border border-white/6 px-2 py-0.5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
