import React from 'react';

import ThemeSwitcher from '@/components/UI/ThemeSwitcher';
// import ShoppingCartLink from '@/components/UI/NavBar/ShoppingCartLink';
// import FavouritesLink from '@/components/UI/NavBar/FavouritesLink';
import CategoriesMenu from '@/components/UI/NavBar/CategoriesMenu';
import dynamic from 'next/dynamic';
// import { HydratedIcons } from './HydradetIcons';

const HydratedIcons = dynamic(
  () => import('./HydradetIcons').then((mod) => mod.HydratedIcons),
  {
    ssr: false,
    // 2. (Опціонально, але рекомендовано) Додаємо заглушку, щоб уникнути стрибка UI
    loading: () => <div className="h-16 w-24" />, // Заглушка з фіксованими розмірами
  },
);

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
        <HydratedIcons onClose={onClose} />

        {/* <div className="flex h-16 items-center justify-between">
          <FavouritesLink
            isBurger
            onClose={onClose}
          />
          <ShoppingCartLink
            fullWidth
            onClose={onClose}
          />
        </div> */}
      </div>
    </div>
  );
};

export default MenuHamburger;
