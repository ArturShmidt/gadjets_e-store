import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CartBlack from '@/img/Cart(Black).svg';
import CartWhite from '@/img/Cart(White).svg';

const ShoppingCartMenuBurger: React.FC = () => {
  return (
    <Link
      href="/shoppingcart"
      className="w-full h-16 border-t border-light-theme-border-color dark:border-dark-theme-border-color flex justify-center relative
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
  );
};

export default ShoppingCartMenuBurger;
