import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILL_DOMAINS } from '../../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(SKILL_DOMAINS[0].id);
  const activeDomain = SKILL_DOMAINS.find((d) => d.id === activeTab)!;

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="skills"
      className="relative bg-[#060608] border-b border-white/[0.08] px-4 sm:px-6 lg:px-8 py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header Strip */}
        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-16 pb-5 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-amber-400 tracking-widest">[04]</span>
            <h2 className="font-display text-xs font-semibold tracking-[0.2em] text-[#f5f2eb] uppercase">
              Capabilities
            </h2>
          </div>
          <span className="text-[11px] font-mono text-[#505058] tracking-wide">
            TECHNICAL COMPETENCY MAP
          </span>
        </div>

        {/* Domain Tab Selector — flat horizontal index */}
        <div className="flex flex-wrap gap-0 mb-0 border border-white/[0.08]">
          {SKILL_DOMAINS.map((domain, i) => (
            <button
              key={domain.id}
              onClick={() => setActiveTab(domain.id)}
              className={`flex-1 min-w-[140px] flex flex-col gap-1 px-5 py-4 text-left border-r border-white/[0.06] last:border-r-0 transition-colors ${activeTab === domain.id
                  ? 'bg-[#0e0e10] border-b-0'
                  : 'bg-transparent hover:bg-[#0a0a0c]'
                }`}
            >
              <span className={`text-[10px] font-mono tracking-widest ${activeTab === domain.id ? 'text-amber-400' : 'text-[#505058]'}`}>
                [0{i + 1}]
              </span>
              <span className={`text-xs font-display font-semibold tracking-tight ${activeTab === domain.id ? 'text-[#f5f2eb]' : 'text-[#808088]'}`}>
                {domain.name.split('&')[0].trim()}
              </span>
            </button>
          ))}
        </div>

        {/* Active Domain Panel */}
        <motion.div
          key={activeTab}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="border border-t-0 border-white/[0.08] bg-[#0a0a0c]"
        >
          {/* Domain Header */}
          <div className="px-6 sm:px-8 py-5 border-b border-white/[0.06] grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
            <div className="sm:col-span-7">
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#f5f2eb] tracking-tight mb-1">
                {activeDomain.name}
              </h3>
              <p className="text-xs font-mono text-[#606068]">{activeDomain.tagline}</p>
            </div>
            <div className="sm:col-span-5">
              <p className="font-sans text-sm text-[#808088] leading-relaxed">
                {activeDomain.description}
              </p>
            </div>
          </div>

          {/* Competency Table */}
          <div className="divide-y divide-white/[0.05]">
            {activeDomain.competencies.map((comp, i) => (
              <motion.div
                key={comp.title}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-0 hover:bg-[#0d0d0f] transition-colors"
              >
                {/* Left: Competency Name + Focus Tag */}
                <div className="lg:col-span-4 px-6 sm:px-8 py-5 border-r border-white/[0.05] flex flex-col justify-between gap-2">
                  <div>
                    <div className="text-[10px] font-mono text-[#505058] mb-1.5">
                      COMPETENCY {String(i + 1).padStart(2, '0')}
                    </div>
                    <h4 className="font-display text-sm font-semibold text-[#f5f2eb] tracking-tight">
                      {comp.title}
                    </h4>
                  </div>
                  <span className="self-start text-[10px] font-mono text-amber-400/80 bg-amber-400/5 border border-amber-400/20 px-1.5 py-0.5">
                    {comp.focus}
                  </span>
                </div>

                {/* Center: Description */}
                <div className="lg:col-span-5 px-6 sm:px-8 py-5 border-r border-white/[0.05]">
                  <p className="font-sans text-sm text-[#909090] leading-relaxed">
                    {comp.description}
                  </p>
                </div>

                {/* Right: Tool Pills */}
                <div className="lg:col-span-3 px-5 py-5 flex flex-wrap content-start gap-1.5">
                  {comp.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] font-mono text-[#606068] bg-[#111114] border border-white/[0.06] px-2 py-0.5"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Broad Quick Reference — single horizontal strip of all tools */}
        <div className="mt-12 pt-8 border-t border-white/[0.06]">
          <div className="text-[10px] font-mono text-[#505058] tracking-widest mb-4">
            // FULL TOOL & TECHNOLOGY INVENTORY
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'Python', 'TypeScript', 'C++', 'JavaScript',
              'PyTorch', 'TensorFlow', 'LangChain',
              'FastAPI', 'Node.js', 'ReactJS', 'NextJS',
              'Tailwind CSS', 'Framer Motion', 'Three.js',
              'Qdrant', 'ChromaDB', 'Redis', 'PostgreSQL', 'Supabase',
              'Docker', 'GitHub Actions',
              'WebSockets', 'WebRTC',
              'Hugging Face', 'Ollama', 'Numpy', 'Pandas',
              'Pydantic', 'Pytest', 'Vercel',
            ].map((tool) => (
              <span
                key={tool}
                className="text-[11px] font-mono text-[#707070] bg-transparent border border-white/[0.06] px-2.5 py-1 hover:border-amber-400/30 hover:text-[#c0b888] transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
