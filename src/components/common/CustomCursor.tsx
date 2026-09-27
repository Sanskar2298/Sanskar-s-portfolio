import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useSpring(0, { stiffness: 450, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 450, damping: 30 });

  const dotX = useSpring(0, { stiffness: 1000, damping: 50 });
  const dotY = useSpring(0, { stiffness: 1000, damping: 50 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('clickable'))
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, dotX, dotY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer subtle reticle */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-white/20 pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{
          x: mouseX,
          y: mouseY,
          width: isPointer ? 44 : 24,
          height: isPointer ? 44 : 24,
          borderColor: isPointer ? 'rgba(245, 158, 11, 0.6)' : 'rgba(255, 255, 255, 0.25)',
        }}
      />
      {/* Center pinpoint */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-amber-400 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          x: dotX,
          y: dotY,
        }}
      />
    </div>
  );
};
