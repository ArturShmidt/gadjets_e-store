import React from 'react';
import { motion } from 'framer-motion';

type LoaderSize = 'sm' | 'md' | 'lg' | number;

interface AppleLoaderProps {
  size?: LoaderSize;
  speed?: number; // seconds per full spin
  className?: string;
}

const sizeMap: Record<'sm' | 'md' | 'lg', number> = {
  sm: 40,
  md: 60,
  lg: 100,
};

export default function AppleLoader({
  size = 'md',
  speed = 1.2,
  className = '',
}: AppleLoaderProps) {
  const px = typeof size === 'number' ? size : sizeMap[size];

  return (
    <div
      role="status"
      aria-label="Loading"
      className={`fixed inset-0 flex items-center justify-center ${className}`}
    >
      <motion.svg
        width={px}
        height={px}
        viewBox="0 0 50 50"
        fill="none"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: speed, ease: 'linear' }}
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="31.4 31.4"
        />
      </motion.svg>

      <span className="sr-only">Завантаження…</span>
    </div>
  );
}
