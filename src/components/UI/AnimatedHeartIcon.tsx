'use client';

import { motion } from 'framer-motion';

const variants = {
  active: {
    fill: '#ef4444',
    stroke: '#ef4444',
    scale: 1.1,
  },
  inactive: {
    fill: 'transparent',
    stroke: '#6b7280',
    scale: 1,
  },
};

export default function AnimatedHeartIcon({ isActive }: { isActive: boolean }) {
  return (
    <motion.svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.682a4.5 4.5 0 010-6.364z"
        variants={variants}
        animate={isActive ? 'active' : 'inactive'}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}
