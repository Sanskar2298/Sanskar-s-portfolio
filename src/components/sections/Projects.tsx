import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';

const CATEGORY_COLORS: Record<string, string> = {
  'AI/ML': 'text-amber-400 border-amber-400/30 bg-amber-400/5',
  'Full-Stack': 'text-[#a8c0a8] border-[#a8c0a8]/30 bg-[#a8c0a8]/5',
  Systems: 'text-[#a8b8d0] border-[#a8b8d0]/30 bg-[#a8b8d0]/5',
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] as any },
  }),
};

const GitHubIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688 1.029-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative bg-[#080808] border-b border-white/8 px-4 sm:px-6 lg:px-8 py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-16 pb-5 border-b border-white/8">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-amber-400 tracking-widest">[03]</span>
            <h2 className="font-display text-xs font-semibold tracking-[0.2em] text-[#f5f2eb] uppercase">
              Systems
            </h2>
          </div>
          <span className="text-[11px] font-mono text-[#505058] tracking-wide">
            PROJECT CATALOG // SELECTED BUILDS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/6">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              className="bg-[#080808] hover:bg-[#0c0c0e] transition-colors p-6 sm:p-7 flex flex-col justify-between gap-7 group"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-3">
                  <span className={`text-[10px] font-mono tracking-wider px-1.5 py-0.5 border ${CATEGORY_COLORS[project.category]}`}>
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <span className="text-[9px] font-mono text-amber-400 tracking-widest">FEATURED</span>
                    )}
                    <span className="text-[10px] font-mono text-[#404048]">
                      {String(index + 1).padStart(3, '0')}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-lg font-bold text-[#f5f2eb] tracking-tight leading-snug mb-2 group-hover:text-amber-300 transition-colors">
                    {project.title.split('—')[0].trim()}
                  </h3>
                  <p className="text-[11px] font-mono text-[#606068] leading-snug">
                    {project.tagline}
                  </p>
                </div>

                <p className="font-sans text-xs text-[#808088] leading-relaxed line-clamp-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.metrics.map((metric) => (
                    <span key={metric} className="text-[10px] font-mono text-amber-400/80 bg-amber-400/5 border border-amber-400/15 px-1.5 py-0.5">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 border-t border-white/6 pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((technology) => (
                    <span key={technology} className="text-[10px] font-mono text-[#505058] bg-[#111114] px-1.5 py-0.5 border border-white/5">
                      {technology}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] font-mono text-[#404048]">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[11px] font-mono text-[#808088] hover:text-[#f5f2eb] transition-colors studio-link">
                      <GitHubIcon /> SOURCE
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[11px] font-mono text-[#808088] hover:text-amber-400 transition-colors studio-link">
                      <ArrowUpRight className="w-3 h-3" /> DEMO
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
