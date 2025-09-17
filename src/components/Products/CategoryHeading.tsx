import { useIsFavoritesPage } from '@/hooks/useIsFavoritesPage';
import React from 'react';
type CatalogProps = {
  categoryName: string;
  total: number;
};

const CategoryHeading: React.FC<CatalogProps> = ({ categoryName, total }) => {
  const isFavoritesPage = useIsFavoritesPage();

  // опрацьовуємо список
  const formattedCategory =
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  return (
    <div>
      <h2
        className=" font-bold text-[32px] leading-[41px] sm:text-[48px] sm:leading-[56px]
        tracking-[-0.01em] text-light-theme-text dark:text-dark-theme-text pb-2"
      >
        {categoryName === 'phones' ?
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
  );
};

export default CategoryHeading;
