'use client';

import { useState, useEffect } from 'react';
import { useThemeSwitcher } from '@/hooks/useThemeSwitcher';
import { Sun } from '@/components/animate-ui/icons/sun';
import { MoonStar } from '@/components/animate-ui/icons/moon-star';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useThemeSwitcher();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative w-[14px] h-[10px] flex items-center justify-center rounded-full transition-transform duration-500 hover:rotate-180 hover:cursor-pointer"
    >
      <p className="w-6 h-6 text-gray-800 dark:hidden">
        <Sun animateOnHover />
      </p>
      <p className="w-6 h-6 text-gray-100 hidden dark:block">
        <MoonStar animateOnHover />
      </p>
    </button>
  );
};

export default ThemeSwitcher;
