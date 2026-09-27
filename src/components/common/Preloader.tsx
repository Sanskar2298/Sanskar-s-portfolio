import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CallChip } from './CallChip';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const finishTimer = setTimeout(() => {
      setIsDone(true);
      setTimeout(onComplete, 500);
    }, 2500);

    return () => clearTimeout(finishTimer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080808] text-[#f5f2eb]"
        >
          <div className="relative flex flex-col items-center gap-5 px-6">
            <div className="text-center space-y-1">
              <h2 className="text-[11px] font-mono tracking-[0.25em] text-amber-400 uppercase">
                SANSKAR // NIT HAMIRPUR '28
              </h2>
              <p className="text-[10px] font-mono text-[#807044]">INITIALIZING PORTFOLIO</p>
            </div>
            <CallChip
              icon="terminal"
              name="npm"
              argument="run portfolio"
              status={isDone ? 'done' : 'running'}
              expectedMs={2500}
              size={38}
              radius={10}
              color="#fbbf24"
              surfaceColor="#11100b"
              progressColor="#fbbf24"
              progressOpacity={0.16}
              doneColor="#fbbf24"
              errorColor="#f59e0b"
              washOpacity={0.2}
              showTimer
              className="border border-amber-400/25 shadow-[0_0_24px_rgba(251,191,36,0.08)]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
