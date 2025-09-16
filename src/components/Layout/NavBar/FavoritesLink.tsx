// #region Imports

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FavoritesBlack from '@/img/Favorites(Black).svg';
import FavoritesWhite from '@/img/Favorites(White).svg';
// #endregion

const Favorites: React.FC = () => {
  return (
    <Link
      href="/favorites"
      className="h-16 border-light-theme-border-color dark:border-dark-theme-border-color flex justify-center items-center dark:after:bg-dark-theme-text"
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
export default Favorites;
