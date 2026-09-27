import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '../../data/portfolioData';

const ACHIEVEMENT_COLORS = [
  'border-l-amber-400',
  'border-l-[#a8c0a8]',
  'border-l-[#a8b8d0]',
  'border-l-[#c0a8a8]',
];

export const Achievements: React.FC = () => {
  return (
    <section
      id="achievements"
      className="relative bg-[#060608] border-b border-white/8 px-4 sm:px-6 lg:px-8 py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header Strip */}
        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-16 pb-5 border-b border-white/8">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-amber-400 tracking-widest">[06]</span>
            <h2 className="font-display text-xs font-semibold tracking-[0.2em] text-[#f5f2eb] uppercase">
              Achievements
            </h2>
          </div>
          <span className="text-[11px] font-mono text-[#505058] tracking-wide">
            RECOGNITION & COMPETITIVE RECORD
          </span>
        </div>

        {/* Achievement Cards — 2-column on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/6">
          {ACHIEVEMENTS.map((ach, i) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className={`bg-[#060608] hover:bg-[#0a0a0c] transition-colors p-6 sm:p-8 flex flex-col justify-between gap-5 border-l-2 ${ACHIEVEMENT_COLORS[i % ACHIEVEMENT_COLORS.length]} group`}
            >
              <div className="flex flex-col gap-3">
                {/* Top meta row */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#505058] tracking-widest">
                    {ach.date}
                  </span>
                  {ach.metric && (
                    <span className="text-[10px] font-mono text-amber-400 bg-amber-400/8 border border-amber-400/20 px-2 py-0.5">
                      {ach.metric}
                    </span>
                  )}
                </div>

                {/* Badge label */}
                <div className="text-[10px] font-mono text-[#606068] tracking-wider uppercase">
                  {ach.badge}
                </div>

                {/* Title */}
                <h3 className="font-display text-base sm:text-lg font-bold text-[#f5f2eb] tracking-tight leading-snug group-hover:text-amber-200 transition-colors">
                  {ach.title}
                </h3>

                {/* Issuer */}
                <div className="text-xs font-mono text-[#808088]">
                  {ach.issuer}
                </div>

                {/* Description */}
                <p className="font-sans text-sm text-[#707070] leading-relaxed">
                  {ach.description}
                </p>
              </div>

              {/* Link if available */}
              {ach.link && (
                <a
                  href={ach.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono text-[#606068] hover:text-amber-400 transition-colors studio-link self-start"
                >
                  VIEW CREDENTIAL →
                </a>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
