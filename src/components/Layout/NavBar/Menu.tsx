import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CartBlack from '@/img/Cart(Black).svg';
import CartWhite from '@/img/Cart(White).svg';
import FavoritesBlack from '@/img/Favorites(Black).svg';
import FavoritesWhite from '@/img/Favorites(White).svg';

type Props = {
  onClose: () => void;
};

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/phones', label: 'Phones' },
  { href: '/tablets', label: 'Tablets' },
  { href: '/accessories', label: 'Accessories' },
];

const Menu: React.FC<Props> = ({ onClose }) => {
  return (
    <>
      <div className="fixed inset-0 top-12 bg-white flex justify-between flex-col dark:bg-dark-theme-bg">
        <ul className=" flex flex-col items-center pt-6 gap-4 z-50">
          {menuItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={onClose}
                className="
              relative text-light-theme-text-menu text-[12px] font-extrabold uppercase tracking-[1]
              hover:text-light-theme-text-hover 
              transition-colors duration-200
              after:absolute after:left-0 after:right-0 after:h-[2px] after:bg-light-theme-text-hover after:bottom-[-8px] 
              after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 dark:hover:text-white 
              dark:after:bg-dark-theme-text dark:text-text-gray"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-center items-center h-16">
          <Link
            href="/favorites"
            className="w-40 h-16 border-r border-t border-light-theme-border-color dark:border-dark-theme-border-color flex justify-center relative
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

          <Link
            href="/shoppingcart"
            className="w-40 h-16 border-t border-light-theme-border-color dark:border-dark-theme-border-color flex justify-center relative
               after:absolute after:left-0 after:right-0 after:h-[2px] after:bg-light-theme-text-hover after:bottom-0
               after:scale-x-0 hover:after:scale-x-100 after:origin-bottom after:transition-transform after:duration-200 dark:after:bg-dark-theme-text"
          >
            {/* black cart */}

            <Image
              src={CartBlack}
              alt="cart"
              className="dark:hidden"
            />

            {/* white cart */}

            <Image
              src={CartWhite}
              alt="cart"
              className="hidden dark:block"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
