import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FavoritesBlack from '@/img/Favorites(Black).svg';
import FavoritesWhite from '@/img/Favorites(White).svg';

const FavoritesMenuBurger: React.FC = () => {
  return (
    <Link
      href="/favorites"
      className="w-full h-16 border-r border-t border-light-theme-border-color dark:border-dark-theme-border-color flex justify-center relative
               after:absolute after:left-0 after:right-0 after:h-[2px] after:bg-light-theme-text-hover after:bottom-0
               after:scale-x-0 hover:after:scale-x-100 after:origin-bottom after:transition-transform after:duration-200 dark:after:bg-dark-theme-text"
    >
      {/* black favorites */}

      <Image
        src={FavoritesBlack}
        alt="favorites"
        className="dark:hidden"
      />
      {/* white favorites */}

      <Image
        src={FavoritesWhite}
        alt="favorites"
        className="hidden dark:block"
      />
    </Link>
  );
};
export default FavoritesMenuBurger;
