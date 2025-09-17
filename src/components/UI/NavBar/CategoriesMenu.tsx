import React from 'react';
import { NavBarCategories } from '@/types/NavBarCategories';
import Link from 'next/link';

interface Props {
  direction?: 'row' | 'col';
  onClose?: () => void;
}

const CategoriesMenu: React.FC<Props> = ({ direction = 'row', onClose }) => {
  const isRow = direction === 'row';

  return (
    <ul
      className={`flex ${isRow ? 'flex-row gap-8 lg:gap-16 ml-8 lg:ml-12' : 'flex-col items-center pt-6 gap-4 z-50'}`}
    >
      {NavBarCategories.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            onClick={onClose}
            className={`
              relative text-light-theme-text-menu text-[12px] font-extrabold uppercase tracking-[1]
              hover:text-light-theme-text-hover transition-colors duration-200
              after:absolute after:left-0 after:right-0 after:h-[2px] 
              after:bg-light-theme-text-hover after:scale-x-0 after:transition-transform after:duration-200
              hover:after:scale-x-100
              ${isRow ? 'after:bottom-[-14px] lg:after:bottom-[-22px]' : 'after:bottom-[-8px]'}
              dark:hover:text-white dark:after:bg-dark-theme-text dark:text-text-gray
            `}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesMenu;
