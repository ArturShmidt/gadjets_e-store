'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CartBlack from '@/components/UI/icons/Cart(Black).svg';
import CartWhite from '@/components/UI/icons/Cart(White).svg';
import { CategoryName } from '@/types/CategoryName';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

interface Props {
  onClose?: () => void;
  fullWidth?: boolean;
}

const ShoppingCartLink: React.FC<Props> = ({ onClose, fullWidth = false }) => {
  const itemCount = useSelector((state: RootState) =>
    state.persisted.cart.items.reduce((sum, item) => sum + item.quantity, 0),
  );

  return (
    <Link
      href={`/${CategoryName.Cart}`}
      onClick={onClose}
      className={`
        relative block
        ${fullWidth ? 'w-full h-16 border-t flex justify-center items-center' : 'inline-flex p-2'}
        border-light-theme-border-color dark:border-dark-theme-border-color
        after:absolute after:left-0 after:right-0 after:h-[2px] after:bg-light-theme-text-hover after:bottom-0
        after:scale-x-0 after:origin-bottom after:transition-transform after:duration-200 dark:after:bg-dark-theme-text
      `}
    >
      <Image
        src={CartBlack}
        alt="CartBlack"
        className="dark:hidden"
      />
      <Image
        src={CartWhite}
        alt="CartWhite"
        className="hidden dark:block"
      />
      {itemCount > 0 && (
        <span
          className="absolute top-0 right-0 bg-red-500 text-white text-xs 
            rounded-full h-4 w-4 flex items-center justify-center"
        >
          {itemCount > 9 ? '9+' : itemCount}
        </span>
      )}
    </Link>
  );
};

export default ShoppingCartLink;
