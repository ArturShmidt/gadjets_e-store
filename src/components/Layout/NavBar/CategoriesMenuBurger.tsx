import { menuCategories } from '@/types/MenuCategories';
import Link from 'next/link';
import React from 'react';

type Props = {
  onClose: () => void;
};

const CategoriesMenuBurger: React.FC<Props> = ({ onClose }) => {
  return (
    <ul className=" flex flex-col items-center pt-6 gap-4 z-50">
      {menuCategories.map(({ href, label }) => (
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
  );
};

export default CategoriesMenuBurger;
