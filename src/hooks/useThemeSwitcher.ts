'use client';

import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

export const useThemeSwitcher = (): [Theme, (theme: Theme) => void] => {
  const [mode, setMode] = useState<Theme>('light');

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setMode(isDarkMode ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      window.localStorage.setItem('theme', 'light');
    }
  }, [mode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!('theme' in window.localStorage)) {
        setMode(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return [mode, setMode];
};
