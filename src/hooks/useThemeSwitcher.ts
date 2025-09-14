'use client';

import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

export const useThemeSwitcher = (): [Theme, (theme: Theme) => void] => {
  const [mode, setMode] = useState<Theme>(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }

    const userPref = window.localStorage.getItem('theme');
    if (userPref === 'dark' || userPref === 'light') {
      return userPref;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    return mediaQuery.matches ? 'dark' : 'light';
  });

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
