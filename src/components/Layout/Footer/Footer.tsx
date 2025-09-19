'use client';
// #region Imports

import React from 'react';
import Link from 'next/link';

import Logo from '@/components/UI/NavBar/Logo';
import { FooterCategories } from '@/types/FooterCategories';
import ArrowUpComponent from '@/components/UI/Footer/ArrowUpComponent';

// #endregion
const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="flex flex-col gap-8 px-4 py-8
    sm:flex-row sm:items-center justify-between 
    dark:bg-dark-theme-bg "
    >
      <Logo placement="footer" />
      <nav
        className="flex flex-col items-start 
        sm:flex-row gap-4 sm:gap-4 lg-max:gap-22"
      >
        {FooterCategories.map((category) => {
          return (
            <Link
              key={category.label}
              href={category.href}
              className="
    relative text-[12px] font-bold leading-[11px] tracking-[0.04em] 
    text-light-theme-text-menu dark:text-light-theme-text-menu hover:text-light-theme-text
    sm:transition-colors sm:duration-200
    sm:after:absolute sm:after:left-0 sm:after:right-0 sm:after:h-[2px] 
    sm:after:bg-light-theme-text sm:after:top-[-44px]  
    sm:after:scale-x-0 sm:hover:after:scale-x-100 sm:after:origin-top sm:after:transition-transform sm:after:duration-200
    dark:hover:text-white sm:dark:after:bg-dark-theme-text
  "
              target="_blank"
            >
              {category.label.toUpperCase()}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={scrollToTop}
          className="text-[12px] font-bold leading-none tracking-[0.04em] 
            text-light-theme-text-menu dark:text-text-gray dark:hover:text-dark-theme-text hover:text-light-theme-text
            cursor-pointer"
        >
          Back to top
        </button>
        <button
          onClick={scrollToTop}
          className="bg-white dark:bg-dark-theme-btn-selected
            border dark:border-[0] border-light-theme-border-active rounded-[48px] hover:border-light-theme-text dark:hover:bg-dark-theme-border-hover
            flex justify-center items-center h-8 w-8 cursor-pointer selected-dark-theme-btn-primary"
        >
          <ArrowUpComponent />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
