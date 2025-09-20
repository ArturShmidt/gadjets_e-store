// #region Imports

import React from 'react';

import ThemeSwitcher from '@/components/UI/ThemeSwitcher';
import ShoppingCartLink from '@/components/UI/NavBar/ShoppingCartLink';
import FavouritesLink from '@/components/UI/NavBar/FavouritesLink';
import CategoriesMenu from '@/components/UI/NavBar/CategoriesMenu';

// #endregion

type Props = {
  onClose: () => void;
};

const MenuHamburger: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="dark:bg-dark-theme-bg fixed inset-0 top-12 z-2 flex flex-col justify-between bg-white">
      <CategoriesMenu
        onClose={onClose}
        direction="col"
      />
      <div>
        <div
          className="border-light-theme-border-color dark:border-dark-theme-border-color 
        after:bg-light-theme-text-hover dark:after:bg-dark-theme-text
        relative flex h-16 w-full items-center justify-center border-t
        after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[2px] after:origin-bottom after:scale-x-0 after:transition-transform after:duration-200
        hover:after:scale-x-100"
        >
          <ThemeSwitcher />
        </div>
        <div className="flex h-16 items-center justify-between">
          <FavouritesLink
            isBurger
            onClose={onClose}
          />
          <ShoppingCartLink
            fullWidth
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuHamburger;
