'use client';

// #region Imports

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Hamburger from './Hamburger';
import Menu from './MenuHamburger';
import Favorites from './FavoritesLink';
import ShoppingCart from './ShoppingCartLink';
import { menuCategories } from '../../../types/MenuCategories';
import Logo from './Logo';
import ThemeSwitcher from '@/components/UI/ThemeSwitcher';

// #endregion

const components = [
  { id: 'theme', element: <ThemeSwitcher /> },
  { id: 'favorites', element: <Favorites /> },
  { id: 'cart', element: <ShoppingCart /> },
];

const NavBar = () => {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (opened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [opened]);

  return (
    <>
      <div className="h-12 flex justify-between px-4 border-b border-light-theme-border-color dark:border-dark-theme-border-color dark:bg-dark-theme-bg sm:hidden">
        <Logo />
        <div className="w-8 flex justify-end items-center border-l border-light-theme-border-color dark:border-dark-theme-border-color ">
          <Hamburger
            opened={opened}
            onOpened={setOpened}
          />
        </div>
        {opened && <Menu onClose={() => setOpened(false)} />}
      </div>

      <div className="h-12 lg:h-16 hidden sm:flex flex-row items-center px-4 lg:px-6  border-b border-light-theme-border-color dark:border-dark-theme-border-color dark:bg-dark-theme-bg ">
        <Logo />
        <div className="dark:bg-dark-theme-bg">
          <ul className="flex gap-8 lg:gap-16 ml-8 lg: ml-12">
            {menuCategories.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="
               relative text-light-theme-text-menu text-[12px] font-extrabold uppercase tracking-[1]
              hover:text-light-theme-text-hover 
              transition-colors duration-200
              after:absolute after:left-0 after:right-0 after:h-[2px] after:bg-light-theme-text-hover after:bottom-[-14px] lg:after:bottom-[-22px] 
              after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 dark:hover:text-white 
              dark:after:bg-dark-theme-text dark:text-text-gray"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="h-12 lg:h-16 flex ml-auto gap-4 lg:gap-6">
          {components.map(({ id, element }) => (
            <div
              key={id}
              className="flex pl-4 lg:pl-6 justify-center items-center border-l border-light-theme-border-color dark:border-dark-theme-border-color"
            >
              {element}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
