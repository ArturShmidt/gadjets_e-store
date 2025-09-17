'use client';

import { useState, useEffect } from 'react';
import { useThemeSwitcher } from '@/hooks/useThemeSwitcher';
import { Sun } from '../animate-ui/icons/sun';
import { MoonStar } from '../animate-ui/icons/moon-star';

const ThemeSwitcher = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-[14px] h-[10px]" />;
  }

  return (
    <button
      onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
      className="relative w-[14px] h-[10px] flex items-center justify-center rounded-full transition-transform duration-500 hover:rotate-180 hover:cursor-pointer"
    >
      {mode === 'light' ?
        <p>
          <Sun animateOnHover />
        </p>
      : <p className="dark:text-dark-theme-text rounded-full">
          <MoonStar animateOnHover />
        </p>
      }
    </button>
  );
};

export default ThemeSwitcher;
