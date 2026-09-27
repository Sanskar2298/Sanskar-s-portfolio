import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge: string;
  title: string;
  highlightTitle?: string;
  subtitle?: string;
  alignment?: 'center' | 'left';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlightTitle,
  subtitle,
  alignment = 'center',
}) => {
  const isCenter = alignment === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 sm:mb-16 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl`}
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md glass-pill mb-4 border border-white/10">
        <span className="w-1.5 h-1.5 rounded-full bg-white" />
        <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-300 font-medium">
          {badge}
        </span>
      </div>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
        {title}{' '}
        {highlightTitle && (
          <span className="text-zinc-400">
            {highlightTitle}
          </span>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
