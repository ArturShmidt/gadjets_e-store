import React from 'react';
import { CategoryName } from '@/types/CategoryName';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  direction?: 'row' | 'col';
  onClose?: () => void;
}

const CategoriesMenu: React.FC<Props> = ({ direction = 'row', onClose }) => {
  const isRow = direction === 'row';
  const NavBarCategories = Object.values(CategoryName);
  const pathname = usePathname();

  return (
    <ul
      className={`flex ${isRow ? 'flex-row gap-8 lg:gap-16 ml-8 lg:ml-12' : 'flex-col items-center pt-6 gap-4 z-50'}`}
    >
      {NavBarCategories.slice(0, 4).map((category) => {
        // TODO: must be remove to separate component in future
        const isActive =
          (
            pathname === `/${category}` ||
            (category === CategoryName.Home && pathname === '/')
          ) ?
            'after:absolute after:left-0 after:right-0 after:h-[3px] after:bg-light-theme-text-hover after:bottom-0 after:scale-x-100'
          : '';

        return (
          <li key={category}>
            <Link
              href={category === CategoryName.Home ? `/` : `/${category}`}
              onClick={onClose}
              className={`
              relative text-light-theme-text-menu text-[12px] font-extrabold uppercase tracking-[1]
              hover:text-light-theme-text-hover transition-colors duration-200
              after:absolute after:left-0 after:right-0 after:h-[2px] 
              after:bg-light-theme-text-hover after:scale-x-0 after:transition-transform after:duration-200
              hover:after:scale-x-100
              ${isRow ? 'after:h-[3px] after:bottom-[-14px] lg:after:bottom-[-22px]' : 'after:bottom-[-8px]'}
              dark:hover:text-white dark:after:bg-dark-theme-text dark:text-text-gray
              ${isActive}
            `}
            >
              {category}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoriesMenu;
