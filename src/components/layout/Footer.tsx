import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PERSONAL_DATA } from '../../data/portfolioData';

const GithubIcon = () => (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);
const LinkedinIcon = () => (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] px-4 sm:px-6 lg:px-8 py-10 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        {/* Top hairline row */}
        <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Brand */}
          <div>
            <div className="font-display font-bold text-sm tracking-tight text-[#f5f2eb] mb-0.5">
              SANSKAR
            </div>
            <div className="text-[10px] font-mono text-[#505058] tracking-wider">
              ECE // NIT HAMIRPUR '28
            </div>
          </div>

          {/* Compact nav */}
          <nav className="hidden sm:flex items-center gap-5">
            {[
              { name: 'ABOUT', href: '#about' },
              { name: 'SYSTEMS', href: '#projects' },
              { name: 'CAPABILITIES', href: '#skills' },
              { name: 'TIMELINE', href: '#experience' },
              { name: 'RECOGNITION', href: '#achievements' },
              { name: 'CONTACT', href: '#contact' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-mono text-[#606068] hover:text-[#f5f2eb] transition-colors studio-link"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-2">
            {[
              { href: PERSONAL_DATA.github, icon: <GithubIcon />, label: 'GitHub' },
              { href: PERSONAL_DATA.linkedin, icon: <LinkedinIcon />, label: 'LinkedIn' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 flex items-center justify-center border border-white/[0.08] text-[#606068] hover:border-amber-400/50 hover:text-amber-400 transition-colors"
              >
                {s.icon}
              </a>
            ))}
            <a
              href={`mailto:${PERSONAL_DATA.email}`}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-white/[0.08] hover:border-amber-400/50 text-[11px] font-mono text-[#808088] hover:text-amber-300 transition-colors ml-1"
            >
              EMAIL <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom meta strip */}
        <div className="pt-5 flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono text-[#404048]">
          <span>© {year} SANSKAR. ALL RIGHTS RESERVED.</span>
          <span>CRAFTED WITH LOVE</span>
          <span>NIT HAMIRPUR // 31.7084°N 76.5273°E</span>
        </div>
      </div>
    </footer>
  );
};
