'use client';

// #region Imports

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FavouritesBlack from '@/components/UI/icons/Favourites(Black).svg';
import FavouritesWhite from '@/components/UI/icons/Favourites(White).svg';
import { CategoryName } from '@/types/CategoryName';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

// #endregion

type Props = {
  onClose?: () => void;
  isBurger?: boolean;
};

const FavouritesLink: React.FC<Props> = ({ onClose, isBurger = false }) => {
  const favoritesCount = useSelector(
    (state: RootState) => state.persisted.favourites.items.length,
  );

  const baseClasses = `
    relative block  // Додаємо block, щоб можна було позиціонувати лічильник
    ${
      isBurger ?
        `w-full h-16 flex justify-center items-center  // Додаємо items-center
       border-r border-t border-light-theme-border-color dark:border-dark-theme-border-color 
       after:absolute after:left-0 after:right-0 after:h-[2px] after:bg-light-theme-text-hover after:bottom-0
       after:scale-x-0 hover:after:scale-x-100 after:origin-bottom after:transition-transform after:duration-200 dark:after:bg-dark-theme-text`
      : 'p-2'
    }`;

  return (
    <Link
      href={`/${CategoryName.Favourites}`}
      className={baseClasses}
      onClick={onClose}
    >
      <Image
        src={FavouritesBlack}
        alt="FavouritesBlack"
        className="dark:hidden"
      />

      <Image
        src={FavouritesWhite}
        alt="FavouritesWhite"
        className="hidden dark:block"
      />
      {favoritesCount > 0 && (
        <span
          className="absolute top-0 right-0 bg-red-500 text-white text-xs 
                     rounded-full h-4 w-4 flex items-center justify-center"
        >
          {favoritesCount > 9 ? '9+' : favoritesCount}
        </span>
      )}
    </Link>
  );
};

export default FavouritesLink;
