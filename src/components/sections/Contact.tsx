import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
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


export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#f59e0b', '#d97706', '#ffffff', '#e5e3dc', '#71717a']
        });
      } catch {
        // Safe fallback if canvas-confetti environment issues
      }
    }, 800);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#080808] border-b border-white/[0.08] px-4 sm:px-6 lg:px-8 py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header Strip */}
        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-16 pb-5 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-amber-400 tracking-widest">[07]</span>
            <h2 className="font-display text-xs font-semibold tracking-[0.2em] text-[#f5f2eb] uppercase">
              Contact
            </h2>
          </div>
          <span className="text-[11px] font-mono text-[#505058] tracking-wide">
            TRANSMIT A MESSAGE
          </span>
        </div>

        {/* Asymmetric grid: large editorial line left, form right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Editorial opening statement (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#f5f2eb] tracking-tight leading-tight mb-5">
                Let's build something that{' '}
                <span className="font-serif italic font-normal text-amber-300">
                  matters.
                </span>
              </h3>
              <p className="font-sans text-base text-[#909090] leading-relaxed">
                Open to summer internship roles in AI/ML systems, backend infrastructure, and full-stack product
                engineering. Available for 2027 summer internships. Direct and async communication preferred.
              </p>
            </motion.div>

            {/* Direct links */}
            <div className="flex flex-col gap-2">
              <div className="text-[10px] font-mono text-[#505058] tracking-widest mb-1">
                // DIRECT CHANNELS
              </div>
              {[
                {
                  label: 'EMAIL',
                  value: PERSONAL_DATA.email,
                  href: `mailto:${PERSONAL_DATA.email}`,
                  icon: <Mail className="w-3.5 h-3.5" />,
                },
                {
                  label: 'LINKEDIN',
                  value: 'linkedin.com/in/sanskar-srivastava',
                  href: PERSONAL_DATA.linkedin,
                  icon: <LinkedinIcon />,
                },
                {
                  label: 'GITHUB',
                  value: 'github.com/sanskar',
                  href: PERSONAL_DATA.github,
                  icon: <GithubIcon />,
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 border border-white/[0.06] bg-[#0c0c0e] hover:border-amber-400/40 hover:bg-[#101010] transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#606068] group-hover:text-amber-400 transition-colors">
                      {link.icon}
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[9px] font-mono text-[#505058] tracking-wider">{link.label}</span>
                      <span className="text-xs font-mono text-[#d4d0c7] group-hover:text-white transition-colors">
                        {link.value}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#505058] group-hover:text-amber-400 transition-colors" />
                </a>
              ))}
            </div>

            {/* Status stamp */}
            <div className="border border-white/[0.06] bg-[#0c0c0e] px-5 py-4">
              <div className="text-[10px] font-mono text-[#505058] tracking-widest mb-2">
                CURRENT STATUS
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
                <span className="text-sm font-mono text-[#f5f2eb]">
                  Available for 2027 Summer Intern Roles
                </span>
              </div>
              <p className="text-xs font-mono text-[#606068] mt-1.5">
                NIT Hamirpur graduation: May 2028
              </p>
            </div>
          </div>

          {/* Right: Sparse Form (7 cols) */}
          <div className="lg:col-span-7">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border border-amber-400/30 bg-amber-400/5 px-8 py-10 flex flex-col items-center gap-4 text-center h-full justify-center min-h-[400px]"
              >
                <div className="w-10 h-10 border border-amber-400/50 flex items-center justify-center">
                  <Send className="w-4 h-4 text-amber-400" />
                </div>
                <div className="font-display text-xl font-bold text-[#f5f2eb]">
                  Message Transmitted
                </div>
                <p className="font-mono text-sm text-[#808088] max-w-xs">
                  Received. I'll respond within 24–48 hours via email.
                </p>
                <div className="flex flex-col items-center gap-2 mt-2">
                  <span className="text-[10px] font-mono text-amber-400 tracking-widest">
                    STATUS: ACKNOWLEDGED // TRANSMISSION RECORDED
                  </span>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', message: '' });
                    }}
                    className="btn-studio-secondary text-xs mt-3 py-2 px-4"
                  >
                    TRANSMIT ANOTHER DISPATCH
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-0 border border-white/[0.08]">
                {/* Form header */}
                <div className="px-6 py-3 border-b border-white/[0.06] bg-[#0a0a0c] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#808088] tracking-widest">
                    COMPOSE MESSAGE
                  </span>
                  <span className="text-[10px] font-mono text-amber-400">
                    ENCRYPTED_CHANNEL_001
                  </span>
                </div>

                {/* Name field */}
                <div className="border-b border-white/[0.06]">
                  <label className="block px-6 pt-4 pb-1 text-[10px] font-mono text-[#505058] tracking-widest">
                    [01] SENDER NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                    placeholder="Your name"
                    className="w-full px-6 pb-4 pt-1 bg-transparent text-sm font-sans text-[#f5f2eb] placeholder-[#404048] outline-none focus:bg-[#0d0d0f] transition-colors"
                  />
                </div>

                {/* Email field */}
                <div className="border-b border-white/[0.06]">
                  <label className="block px-6 pt-4 pb-1 text-[10px] font-mono text-[#505058] tracking-widest">
                    [02] REPLY-TO ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="w-full px-6 pb-4 pt-1 bg-transparent text-sm font-sans text-[#f5f2eb] placeholder-[#404048] outline-none focus:bg-[#0d0d0f] transition-colors"
                  />
                </div>

                {/* Message field */}
                <div className="border-b border-white/[0.06]">
                  <label className="block px-6 pt-4 pb-1 text-[10px] font-mono text-[#505058] tracking-widest">
                    [03] MESSAGE BODY
                  </label>
                  <textarea
                    required
                    rows={7}
                    value={formState.message}
                    onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                    placeholder="Describe your project, role, or inquiry..."
                    className="w-full px-6 pb-6 pt-1 bg-transparent text-sm font-sans text-[#f5f2eb] placeholder-[#404048] outline-none resize-none focus:bg-[#0d0d0f] transition-colors"
                  />
                </div>

                {/* Submit */}
                <div className="px-6 py-4 bg-[#0a0a0c] flex items-center justify-between gap-4">
                  <span className="text-[10px] font-mono text-[#404048]">
                    {formState.message.length > 0
                      ? `${formState.message.length} chars — ready to transmit`
                      : 'All fields required before transmission'}
                  </span>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-studio-primary disabled:opacity-40 disabled:cursor-not-allowed min-w-[140px]"
                  >
                    {loading ? (
                      <span className="font-mono text-xs">TRANSMITTING...</span>
                    ) : (
                      <>
                        <span>TRANSMIT</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
