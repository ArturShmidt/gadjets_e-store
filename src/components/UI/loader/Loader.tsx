import React from 'react';

type LoaderSize = 'sm' | 'md' | 'lg' | number;

interface AppleLoaderProps {
  size?: LoaderSize;
  speed?: number; // seconds per full spin
  className?: string;
}

const sizeMap: Record<'sm' | 'md' | 'lg', number> = {
  sm: 24,
  md: 40,
  lg: 64,
};

export default function AppleLoader({
  size = 'md',
  speed = 1.2,
  className = '',
}: AppleLoaderProps) {
  const px = typeof size === 'number' ? size : sizeMap[size];

  const style: React.CSSProperties = {
    width: `${px}px`,
    height: `${px}px`,
    animation: `spinScale ${speed}s linear infinite`,
  };

  return (
    <div
      role="status"
      aria-label="Loading"
      className={`inline-flex items-center justify-center ${className}`}
      style={{ lineHeight: 0 }}
    >
      <svg
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        className="block"
        style={style}
        aria-hidden="true"
        fill="currentColor"
      >
        {/* стилізоване яблучко (силует) */}
        <path d="M807.6 581.4c-1.6-107.8 88.4-159.8 92.4-162.2-50.6-73.6-129.6-83.6-157.6-84.8-67-6.8-130 39.6-163.6 39.6-33.6 0-85.6-38.6-140.8-37.6-72 1.2-138.4 41.8-175.6 106-75.2 131-19.2 326.2 54 432.8 36 53.8 78.8 114.4 135.2 112.2 53.8-2 74.2-34.8 138.6-34.8 64.4 0 82.6 34.8 139.6 33.4 58.8-1.4 95.8-54.8 131.6-108.6 41.2-61 58.4-120 59.8-122.8-1.4-.6-115.4-44.6-117-176.6z" />
        <path d="M648.6 172.6c33.8-41 56.6-98 50.2-155.6-48.4 2-106.8 32.4-141.8 73.4-31 36.4-58 98.8-49 156.8 52 4 104.4-26.4 140.6-74.6z" />
      </svg>

      <span className="sr-only">Завантаження…</span>

      {/* Локальні keyframes */}
      <style jsx>{`
        @keyframes spinScale {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.2);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
