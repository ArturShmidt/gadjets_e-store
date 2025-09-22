import Link from 'next/link';
import React from 'react';
import CategoryBreadcrumb from '@/components/UI/CategoryBreadcrumb';
import { CategoryName } from '@/types/CategoryName';
import ArrowLeftComponent from '@/components/UI/ShoppingCartIcons/ArrowLeftComponent';

interface Props {
  category: CategoryName;
  name: string;
}

const ProductDetailsHeroSectionHeader: React.FC<Props> = ({
  name,
  category,
}) => {
  return (
    <div className="mt-6 mx-4 sm:mx-6 lg-max:mx-8 dark:text-dark-theme-text">
      <CategoryBreadcrumb
        categoryName={category}
        name={name}
      />
      <Link
        href={`/${category}`}
        className="flex mb-6 sm:mb-4  w-13 cursor-pointer"
      >
        <div className="mr-1 text-light-theme-text dark:text-dark-theme-text">
          <ArrowLeftComponent />
        </div>
        <span className="text-light-theme-text-menu dark:text-dark-theme-text font-bold text-[12px]">
          Back
        </span>
      </Link>
      <h1 className="font-bold mb-6 text-[clamp(1.5rem,5vw,3rem)]">{name}</h1>
    </div>
  );
};

export default ProductDetailsHeroSectionHeader;
