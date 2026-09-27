import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Terminal, Server } from 'lucide-react';
import { ComputeCluster } from '../3d/ComputeCluster';
import { PERSONAL_DATA } from '../../data/portfolioData';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll-driven text mask reveal
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Smooth scroll transformations for understated editorial reveals
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.3]);
  const statsY = useTransform(scrollYProgress, [0, 0.4], [0, -20]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen bg-[#080808] pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between border-b border-white/[0.08]"
    >
      {/* Top Architectural Technical Header Strip */}
      <div className="max-w-7xl w-full mx-auto pb-6 border-b border-white/[0.08] flex flex-wrap items-center justify-between text-[11px] font-mono text-[#71717a] gap-3">
        <div className="flex items-center gap-3">
          <span className="text-amber-400">INDEX // 001</span>
          <span className="text-white/[0.15]">/</span>
          <span>DISTRIBUTED SYSTEMS & AI</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden md:inline">NIT HAMIRPUR // B.TECH '28</span>
          <span className="hidden md:inline text-white/[0.15]">/</span>
          <span className="text-[#a1a1aa]">31.7084° N, 76.5273° E</span>
        </div>
      </div>

      {/* Main Asymmetric Grid */}
      <div className="max-w-7xl w-full mx-auto py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left / Primary Column (7 cols): Typographic Core */}
        <motion.div
          style={{ opacity: headlineOpacity }}
          className="lg:col-span-7 flex flex-col justify-start"
        >
          {/* Sub-tag marker */}
          <div className="flex items-center gap-2 mb-4 text-xs font-mono text-amber-400 tracking-wider">
            <span className="w-1.5 h-1.5 bg-amber-400" />
            <span>PORTFOLIO & SYSTEM SPECIFICATION // 2026</span>
          </div>

          {/* Headline with distinctive font pairing & tight tracking */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] font-bold tracking-[-0.04em] text-[#f5f2eb] leading-[0.95] uppercase">
            Engineering
            <br />
            <span className="font-serif italic font-normal tracking-normal text-[#faf8f5] lowercase text-5xl sm:text-7xl lg:text-8xl xl:text-[92px] pr-2">
              scalable
            </span>
            <br />
            systems, backends &
            <br />
            <span className="text-amber-400 font-display">
              autonomous AI.
            </span>
          </h1>

          {/* Scroll-Driven Editorial Narrative / Tagline */}
          <div className="mt-8 pt-6 border-t border-white/[0.08] max-w-2xl">
            <div className="text-xs font-mono text-[#71717a] mb-2 uppercase tracking-widest">
              // THESIS & ARCHITECTURAL FOCUS
            </div>
            <p className="font-sans text-base sm:text-lg text-[#c4c0b5] leading-relaxed">
              Pre-Final Year B.Tech student at{' '}
              <strong className="text-white font-semibold underline underline-offset-4 decoration-amber-400/50">
                NIT Hamirpur
              </strong>{' '}
              with an 8.46 CGPA, passionate about backend development, system design, and AI-powered applications. Focused on building scalable web applications, designing efficient APIs, and integrating AI into practical software solutions.
            </p>
          </div>

          {/* Understated Action Controls */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="btn-studio-primary"
            >
              <span>EXPLORE SYSTEMS</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href="#about"
              className="btn-studio-secondary"
            >
              <span>READ ARCHITECTURE LEDGER</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#71717a]" />
            </a>
          </div>

          {/* Architectural Credentials Strip / Ledger Table */}
          <motion.div
            style={{ y: statsY }}
            className="mt-8 pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {PERSONAL_DATA.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-3 border border-white/[0.06] bg-[#0c0c0e] flex flex-col justify-between"
              >
                <div className="text-[10px] font-mono text-[#71717a] uppercase">
                  [0{idx + 1}] {stat.label}
                </div>
                <div className="text-2xl font-mono font-bold text-[#f5f2eb] mt-2 tracking-tight flex items-baseline gap-1">
                  <span>{stat.value}</span>
                  <span className="text-xs font-mono font-normal text-amber-400">
                    {stat.suffix}
                  </span>
                </div>
                <div className="text-[11px] font-mono text-[#a1a1aa] mt-1">
                  {stat.highlight}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right / Secondary Column (5 cols): Studio Portrait + 3D Compute Cluster */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* 1. Primary Studio Portrait Viewport */}
          <div className="relative min-h-[420px] sm:min-h-[480px] overflow-hidden border border-white/[0.08] bg-[#0a0a0c] crosshair-corner">
            <img
              src="/myohotue.jpeg"
              alt="Sanskar Srivastava — Software Engineer & AI Systems Architect"
              className="absolute inset-0 h-full w-full object-cover object-center grayscale contrast-125 transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/35 to-transparent" />
            <div className="grain-overlay absolute inset-0 opacity-40 mix-blend-screen" />

            <div className="absolute inset-x-0 bottom-0 border-t border-white/[0.08] bg-[#080808]/85 p-4 backdrop-blur-[2px]">
              <div className="flex flex-col gap-1">
                <div className="text-[10px] font-mono tracking-wider text-amber-400">
                  SUBJECT // SANSKAR SRIVASTAVA
                </div>
                <div className="font-display text-base font-semibold text-[#f5f2eb]">
                  B.Tech '28 • NIT Hamirpur
                </div>
                <p className="max-w-sm text-[11px] font-mono leading-snug text-[#a1a1aa]">
                  Distributed systems, scalable backends, and production AI pipelines.
                </p>
                <div className="mt-1 text-[10px] font-mono text-[#71717a]">
                  ID: NITH-SWE-22108 // DISPATCH READY
                </div>
              </div>
            </div>
          </div>

          {/* 2. Secondary Interactive 3D Distributed Compute Cluster Viewport */}
          <div className="relative border border-white/[0.08] bg-[#0a0a0c] p-1 crosshair-corner">
            {/* Viewport Meta Header */}
            <div className="px-3 py-2 border-b border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#71717a]">
              <div className="flex items-center gap-2">
                <Server className="w-3 h-3 text-amber-400" />
                <span className="text-[#e5e3dc] font-medium">COMPUTE CLUSTER // MESH</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[#a1a1aa]">3D INTERACTIVE</span>
              </div>
            </div>

            {/* 3D Canvas Mount */}
            <div className="h-[220px] w-full bg-[#050507] sm:h-[240px]">
              <ComputeCluster />
            </div>

            {/* Viewport Footer Bar */}
            <div className="px-3 py-1.5 border-t border-white/[0.06] bg-[#080809] flex items-center justify-between text-[10px] font-mono text-[#505058]">
              <span>ARCH: DISTRIBUTED MICROSERVICES</span>
              <span>NODES • RELAYS • PACKETS</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Ticker / Minimal Exploration Prompt */}
      <div className="max-w-7xl w-full mx-auto pt-6 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-[#71717a]">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-amber-400" />
          <span>STATUS: ALL COMPUTE CLUSTERS OPERATIONAL</span>
        </div>

        <a
          href="#about"
          className="flex items-center gap-1.5 hover:text-[#f5f2eb] transition-colors"
        >
          <span>SCROLL FOR SECTION 02</span>
          <ArrowDown className="w-3 h-3 text-amber-400" />
        </a>
      </div>
    </section>
  );
};
