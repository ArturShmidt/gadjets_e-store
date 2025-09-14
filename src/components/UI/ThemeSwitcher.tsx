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
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
      className="relative w-10 h-10 flex items-center justify-center rounded-full transition-transform duration-500 hover:rotate-180"
    >
      {mode === 'light' ?
        <p>
          <Sun animateOnHover />
        </p>
      : <p className="bg-white rounded-full">
          <MoonStar animateOnHover />
        </p>
      }
    </button>
  );
};

export default ThemeSwitcher;
