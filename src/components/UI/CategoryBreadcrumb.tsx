import React from 'react';
import ArrowRightCategoryComponent from './ArrowRightCategoryComponent';
import HomeIconComponent from './HomeIconComponent';
import Link from 'next/link';
import { CategoryName } from '@/types/CategoryName';

const CategoryBreadcrumb = ({
  categoryName,
  name,
}: {
  categoryName: CategoryName;
  name?: string;
}) => {
  const formattedCategory =
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
  return (
    <>
      <nav
        className="
        flex items-center text-sm pb-4 sm:pb-10
        dark:text-dark-theme-text text-light-theme-text
        lg-max:px-0
        mx-auto
      "
      >
        <Link
          href="/"
          className="transition-transform duration-300 hover:scale-[1.4] cursor-pointer"
        >
          <HomeIconComponent />
        </Link>
        <div className="px-2">
          <ArrowRightCategoryComponent />
        </div>
        {name ?
          <Link
            href={`/${formattedCategory.toLowerCase()}`}
            className="dark:text-dark-theme-text text-light-theme-text "
          >
            {formattedCategory}
          </Link>
        : <span className="dark:text-text-gray text-light-theme-text-menu ">
            {formattedCategory}
          </span>
        }
        {name && (
          <>
            <div className="px-2">
              <ArrowRightCategoryComponent />
            </div>
            <span className="dark:text-text-gray text-light-theme-text-menu ">
              {name}
            </span>
          </>
        )}
      </nav>
    </>
  );
};

export default CategoryBreadcrumb;
