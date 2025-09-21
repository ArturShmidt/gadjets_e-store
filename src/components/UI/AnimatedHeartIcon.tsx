'use client';

import { motion } from 'framer-motion';

export default function AnimatedHeartIcon({ isActive }: { isActive: boolean }) {
  const variants = {
    active: {
      fill: '#ef4444',
      stroke: '#ef4444',
      strokeWidth: 2,
      scale: 1.1,
    },
    inactive: {
      fill: 'transparent',
      stroke: '#6b7280',
      strokeWidth: 1.5,
      scale: 1,
    },
  };

  return (
    <div className="flex items-center justify-center rounded-full border-3 border-light-theme-border-color dark:border-none dark:bg-dark-theme-border-color h-[40px] w-[40px]">
      <motion.svg
        width="23"
        height="23"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.968.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z"
          variants={variants}
          animate={isActive ? 'active' : 'inactive'}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          strokeWidth="1.5"
        />
      </motion.svg>
    </div>
  );
}
