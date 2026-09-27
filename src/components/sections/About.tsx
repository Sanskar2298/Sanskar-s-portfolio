import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PERSONAL_DATA } from '../../data/portfolioData';

const ABOUT_FACTS = [
  { label: 'DISCIPLINE', value: 'B.Tech in Electronics & Communication Engineering' },
  { label: 'INSTITUTION', value: 'NIT Hamirpur (National Institute of Technology)' },
  { label: 'ACADEMIC RANK', value: '8.46 / 10.0 CGPA' },
  { label: 'EXPECTED GRADUATION', value: 'May 2028' },
  { label: 'PRIMARY DOMAIN', value: 'Software Engineering & AI Systems Architecture' },
  { label: 'FLAGSHIP SYSTEMS', value: 'Atlas (Multi-Tenant Workspace) & Lexora (RAG Intelligence)' },
  { label: 'LOCATION', value: 'Hamirpur, Himachal Pradesh' },
];

const ENGINEERING_PILLARS = [
  {
    index: 'I',
    title: 'Backend & Full-Stack Engineering',
    body: 'I enjoy building reliable backend systems with REST APIs, authentication, role-based access control, PostgreSQL, Redis, and background jobs. My focus is on understanding how different parts of a system fit together, from API design and database schemas to caching, validation, and error handling.',
  },
  {
    index: 'II',
    title: 'AI-Powered Applications',
    body: "I'm interested in using AI to build practical software rather than treating it as a standalone feature. I've worked with LLM APIs, RAG pipelines, vector databases, embeddings, streaming responses, and AI-assisted workflows, with a focus on making these systems useful and easy to interact with.",
  },
  {
    index: 'III',
    title: 'Problem Solving & Software Fundamentals',
    body: "I've solved 450+ DSA problems across LeetCode and GeeksforGeeks, strengthening my understanding of data structures, algorithms, graphs, dynamic programming, and problem-solving. I also care about writing maintainable code through strong typing, clear API design, structured database schemas, and modular architecture.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as any },
  }),
};

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative bg-[#080808] border-b border-white/[0.08] px-4 sm:px-6 lg:px-8 py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header Strip */}
        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-16 pb-5 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-amber-400 tracking-widest">[02]</span>
            <h2 className="font-display text-xs font-semibold tracking-[0.2em] text-[#f5f2eb] uppercase">
              About
            </h2>
          </div>
          <span className="text-[11px] font-mono text-[#505058] tracking-wide">
            PERSONAL SPECIFICATION & ENGINEERING PHILOSOPHY
          </span>
        </div>

        {/* Main Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left: Pull Quote + Bio (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {/* Large editorial pull-quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="relative pl-5 border-l-2 border-amber-400"
            >
              <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-[#f5f2eb] leading-[1.25] tracking-[-0.01em]">
                "I like building things that work well, understanding why they work, and making them better."
              </p>
            </motion.blockquote>

            {/* Bio paragraph */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="prose prose-invert max-w-none"
            >
              <p className="font-sans text-base sm:text-lg text-[#c4c0b5] leading-relaxed mb-4">
                I'm Sanskar Srivastava, a B.Tech student at{' '}
                <strong className="text-white font-semibold">NIT Hamirpur</strong> with an 8.46 CGPA, focused on{' '}
                backend development, full-stack engineering, and AI-powered applications.
              </p>
              <p className="font-sans text-base text-[#a09c96] leading-relaxed">
                I enjoy working on problems at the intersection of software engineering and AI — from designing APIs and backend systems to building applications around LLMs, RAG, and intelligent workflows. Along the way, I've solved 450+ DSA problems and worked on projects that have strengthened my understanding of databases, system design, APIs, and modern web technologies.
              </p>
              <p className="font-sans text-base text-[#a09c96] leading-relaxed">
                Beyond coding, I'm actively involved in student communities at NIT Hamirpur, where I've worked as an{' '}
                <strong className="text-white font-semibold">ISTE Web Development Coordinator</strong> and{' '}
                <strong className="text-white font-semibold">Junior Training & Placement Representative</strong>, contributing to technical initiatives and student-focused activities.
              </p>
              <p className="font-sans text-base text-[#a09c96] leading-relaxed">
                I'm currently looking for opportunities where I can{' '}
                <strong className="text-white font-semibold">learn from strong engineers, build meaningful products, and grow as a backend/full-stack developer.</strong>
              </p>
            </motion.div>

            {/* Three Engineering Pillars */}
            <div className="space-y-0 border-t border-white/[0.08]">
              <div className="text-[10px] font-mono text-[#505058] tracking-widest py-3">
                // ENGINEERING PILLARS
              </div>
              {ENGINEERING_PILLARS.map((pillar, i) => (
                <motion.div
                  key={pillar.index}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={fadeUp}
                  className="py-5 border-b border-white/[0.06] grid grid-cols-12 gap-4 group"
                >
                  <div className="col-span-2 sm:col-span-1">
                    <span className="font-mono text-xs text-amber-400 opacity-70">{pillar.index}</span>
                  </div>
                  <div className="col-span-10 sm:col-span-11">
                    <h3 className="font-display text-sm font-semibold text-[#f5f2eb] mb-1.5 tracking-tight group-hover:text-amber-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-sm text-[#808088] leading-relaxed">
                      {pillar.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Specification Ledger (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Specification table */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border border-white/[0.08] bg-[#0c0c0e]"
            >
              <div className="px-4 py-2.5 border-b border-white/[0.06] flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#808088] tracking-widest">SPECIFICATION LEDGER</span>
                <span className="text-[10px] font-mono text-amber-400">v2.0</span>
              </div>
              <div className="divide-y divide-white/[0.05]">
                {ABOUT_FACTS.map((fact, i) => (
                  <div key={i} className="px-4 py-3 flex flex-col gap-0.5">
                    <span className="text-[9px] font-mono text-[#505058] tracking-widest uppercase">
                      {fact.label}
                    </span>
                    <span className="text-xs font-sans text-[#d4d0c7] leading-snug">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col gap-2"
            >
              {[
                { label: 'VIEW GITHUB PROFILE', href: PERSONAL_DATA.github },
                { label: 'CONNECT ON LINKEDIN', href: PERSONAL_DATA.linkedin },
                { label: 'LEETCODE', href: PERSONAL_DATA.leetcode },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 bg-[#0c0c0e] border border-white/[0.06] hover:border-amber-400/40 hover:bg-[#111110] transition-colors group"
                >
                  <span className="text-[11px] font-mono text-[#808088] group-hover:text-[#f5f2eb] transition-colors">
                    {link.label}
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-[#505058] group-hover:text-amber-400 transition-colors" />
                </a>
              ))}
            </motion.div>

            {/* Availability kept separate from contact links */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="border border-amber-400/20 bg-amber-400/5 px-5 py-4"
            >
              <div className="text-[10px] font-mono text-amber-400 tracking-widest mb-2">
                AVAILABILITY
              </div>
              <div className="flex items-center gap-2 text-sm font-mono text-[#f5f2eb]">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
                Summer 2027 internship roles
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
