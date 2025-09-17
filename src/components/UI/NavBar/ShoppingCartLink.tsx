// #region Imports

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CartBlack from '@/components/UI/icons/Cart(Black).svg';
import CartWhite from '@/components/UI/icons/Cart(White).svg';
import { CategoryName } from '@/types/CategoryName';

// #endregion
interface Props {
  onClose?: () => void;
  fullWidth?: boolean;
}

const ShoppingCartLink: React.FC<Props> = ({ onClose, fullWidth = false }) => {
  return (
    <Link
      href={`${CategoryName.Cart}`}
      onClick={onClose}
      className={`
        ${fullWidth ? 'w-full h-16 border-t flex justify-center relative' : 'inline-flex'}
        border-light-theme-border-color dark:border-dark-theme-border-color
        after:absolute after:left-0 after:right-0 after:h-[2px] after:bg-light-theme-text-hover after:bottom-0
        after:scale-x-0 hover:after:scale-x-100 after:origin-bottom after:transition-transform after:duration-200 dark:after:bg-dark-theme-text
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
    </Link>
  );
};

export default ShoppingCartLink;
