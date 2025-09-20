import { CategoryName } from '@/types/CategoryName';
import React from 'react';
type CatalogProps = {
  categoryName: CategoryName;
  total: number;
  isFavourites?: true;
};

const CategoryHeading: React.FC<CatalogProps> = ({
  categoryName,
  total,
  isFavourites,
}) => {
  // опрацьовуємо список
  const formattedCategory =
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
  console.log(formattedCategory);
  return (
    <div className="w-[320px] sm:w-[640px] lg-max:w-lg-max">
      <h2
        className="font-[800] text-[32px] leading-[41px] sm:text-[48px] sm:leading-[56px]
        tracking-[-0.01em] text-light-theme-text dark:text-dark-theme-text pb-2"
      >
        {categoryName === CategoryName.Phones ?
          `Mobile ${categoryName.toLowerCase()}`
        : formattedCategory}
      </h2>
      <p
        className="font-[600] text-[14px] leading-[21px]
        text-light-theme-text-menu dark:text-text-gray"
      >
        {total} {!isFavourites ? 'models' : 'items'}
      </p>
    </div>
  );
};

export default CategoryHeading;
