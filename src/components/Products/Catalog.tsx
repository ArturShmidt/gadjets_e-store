'use client';

import React from 'react';
import ProductList from './ProductList';
import products from '@public/api/products.json';
// Smart-компонент, компонент для сортування і іншої роботи з данними.
interface CatalogProps {
  categoryName: string;
}

const Catalog = ({ categoryName }: CatalogProps) => {
  // опрацьовуємо список
  const formattedCategory =
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  const visibleProducts = products.filter(
    (product) => product.category === categoryName,
  );

  return (
    <>
      <h1
        className="font-[Mont] font-[800] text-[32px] leading-[41px] sm:text-[48px] sm:leading-[56px]
       tracking-[-0.01em] text-light-theme-text dark:text-dark-theme-text pt-6 pb-2 sm:pt-10"
      >
        {categoryName === 'phones' ?
          `Mobile ${categoryName.toLowerCase()}`
        : formattedCategory}
      </h1>
      <p
        className="font-[Mont] font-[600] text-[14px] leading-[21px]
        text-light-theme-text-menu dark:text-text-gray"
      >
        {visibleProducts.length} models
      </p>
      <div>
        <div></div>
        <div></div>
      </div>
      <ProductList productlist={visibleProducts} />
    </>
  );
};

export default Catalog;
