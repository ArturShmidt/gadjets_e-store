// #region Imports

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CartBlack from '@/img/Cart(Black).svg';
import CartWhite from '@/img/Cart(White).svg';
// #endregion

const ShoppingCart: React.FC = () => {
  return (
    <Link
      href="/shoppingcart"
      className="h-16 border-light-theme-border-color dark:border-dark-theme-border-color flex justify-center items-center dark:after:bg-dark-theme-text"
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

export default ShoppingCart;
