// #region Imports

import React from 'react';
import ThemeSwitcher from '@/components/UI/ThemeSwitcher';
import ShoppingCartMenuBurger from './ShoppingCartMenuBurgerLink';
import FavoritesMenuBurger from './FavoritesMenuBurgerLink';
import CategoriesMenuBurger from './CategoriesMenuBurger';

// #endregion

type Props = {
  onClose: () => void;
};

const Menu: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 top-12 bg-white flex justify-between flex-col dark:bg-dark-theme-bg z-2">
      <CategoriesMenuBurger onClose={onClose} />
      <div>
        <div
          className="items-center w-full h-16 border-t border-light-theme-border-color dark:border-dark-theme-border-color flex justify-center relative
               after:absolute after:left-0 after:right-0 after:h-[2px] after:bg-light-theme-text-hover after:bottom-0
               after:scale-x-0 hover:after:scale-x-100 after:origin-bottom after:transition-transform after:duration-200 dark:after:bg-dark-theme-text "
        >
          <ThemeSwitcher />
        </div>
        <div className="flex justify-between items-center h-16">
          <FavoritesMenuBurger />
          <ShoppingCartMenuBurger />
        </div>
      </div>
    </div>
  );
};

export default Menu;
