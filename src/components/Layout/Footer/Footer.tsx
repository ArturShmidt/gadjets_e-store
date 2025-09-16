'use client';

import Link from 'next/link';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="w-full border-t border-light-theme-border-color dark:bg-dark-theme-bg dark:border-dark-theme-border-color">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-8 px-4 py-8">
        <div className="text-2xl font-extrabold leading-none dark:text-dark-theme-text">
          NICE👌
          <br />
          GADGETS
        </div>

        <nav className="flex flex-col sm:flex-row items-start gap-4 sm:gap-4 text-light-theme-text-menu dark:text-dark-theme-text">
          <Link
            href="https://github.com/ArturShmidt/gadjets_e-store"
            className="hover:text-gray-400"
            target="_blank"
          >
            GITHUB
          </Link>
          <Link
            href="#"
            className="hover:text-gray-400"
          >
            CONTACTS
          </Link>
          <Link
            href="#"
            className="hover:text-gray-400"
          >
            RIGHTS
          </Link>
        </nav>

        <div className="flex items-center gap-4 justify-center">
          <button
            onClick={scrollToTop}
            className="text-gray-400 hover:text-white"
          >
            Back to top
          </button>
          <button
            onClick={scrollToTop}
            className="border border-light-theme-border-active dark:border-none
             dark:bg-dark-theme-btn-selected dark:text-dark-theme-text 
             p-3 rounded-full dark:rounded-none hover:border-light-theme-text dark:hover:bg-dark-theme-border-hover"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
