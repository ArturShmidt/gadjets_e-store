import { useIsFavoritesPage } from '@/hooks/useIsFavoritesPage';
import { CategoryName } from '@/types/CategoryName';
import React from 'react';
type CatalogProps = {
  categoryName: CategoryName;
  total: number;
};

const CategoryHeading: React.FC<CatalogProps> = ({ categoryName, total }) => {
  const isFavoritesPage = useIsFavoritesPage();

  // опрацьовуємо список
  const formattedCategory =
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
  console.log(formattedCategory);
  return (
    <>
      <div
        className="px-4 sm:px-6 lg:px-0
    mx-auto
    max-w-[320px] sm:max-w-[640px] lg:max-w-[1200px]"
      >
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
          {total} {!isFavoritesPage ? 'models' : 'items'}
        </p>
      </div>
    </>
  );
};

export default CategoryHeading;
