'use client';

// #region Imports

import React, { useEffect, useState } from 'react';
import HamburgerComponent from '../../UI/NavBar/HamburgerComponent';
import MenuHamburger from './MenuHamburger';
import FavoritesLink from '../../UI/NavBar/FavoritesLink';
import ShoppingCartLink from '../../UI/NavBar/ShoppingCartLink';
import Logo from '../../UI/NavBar/Logo';
import ThemeSwitcher from '@/components/UI/ThemeSwitcher';
import CategoriesMenu from '../../UI/NavBar/CategoriesMenu';

// #endregion

const components = [
  { id: 'theme', element: <ThemeSwitcher /> },
  { id: 'favorites', element: <FavoritesLink /> },
  { id: 'shoppingcart', element: <ShoppingCartLink /> },
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
      <div className="h-12 flex justify-between pl-4 border-b border-light-theme-border-color dark:border-dark-theme-border-color dark:bg-dark-theme-bg sm:hidden">
        <Logo placement="navbar" />
        <div
          className="relative w-8 content-center mx-4 pl-4 h-full border-l border-light-theme-border-color dark:border-dark-theme-border-color
            transition-colors duration-200
            after:absolute after:left-0 after:right-0 after:h-[2px] 
            after:bg-light-theme-text-hover after:bottom-[0] after:w-[48px]
            after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200  
            dark:after:bg-dark-theme-text"
        >
          <HamburgerComponent
            opened={opened}
            onOpened={setOpened}
          />
        </div>
        {opened && <MenuHamburger onClose={() => setOpened(false)} />}
      </div>

      <div className="h-12 lg:h-16 hidden sm:flex flex-row items-center pl-4 lg:pl-6  border-b border-light-theme-border-color dark:border-dark-theme-border-color dark:bg-dark-theme-bg ">
        <Logo placement="navbar" />
        <div className="dark:bg-dark-theme-bg">
          <CategoriesMenu direction="row" />
        </div>
        <div className="h-12 lg:h-16 flex flex-row ml-auto ">
          {components.map(({ id, element }) => (
            <div
              key={id}
              className="flex p-4 lg:p-6 items-center border-l border-light-theme-border-color dark:border-dark-theme-border-color relative
              transition-colors duration-200
              after:absolute after:left-0 after:right-0 after:h-[2px] 
              after:bg-light-theme-text-hover after:bottom-[0] 
              after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200  
              dark:after:bg-dark-theme-text"
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
