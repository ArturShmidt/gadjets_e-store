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
      <div className="flex gap-4 pt-8 pb-6">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="sort"
            className="font-[Mont] font-[700] text-[12px] text-light-theme-text-menu dark:text-text-gray"
          >
            Sort by
          </label>
          <select
            id="sort"
            name="sort"
            className="w-34 sm:w-47 lg:w-44 bg-light-theme-bg-dark
                 dark:bg-dark-theme-btn-selected px-4 py-2 pr-10
                 font-[Mont] font-[600] text-[14px] leading-[21px]
                 text-light-theme-text dark:text-text-light border
                 border-light-theme-border-active
                 focus:outline-none focus:ring-2 focus:ring-light-theme-border-active
                 bg-[url('/icons/arrow-down.svg')] bg-no-repeat bg-[right_0.75rem_center]"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="items"
            className="font-[Mont] font-[700] text-[12px] text-light-theme-text-menu dark:text-text-gray"
          >
            Items on page
          </label>
          <select
            id="items"
            name="items"
            className="w-34 lg:w-32 bg-light-theme-bg-dark
                 dark:bg-dark-theme-btn-selected px-4 py-2 pr-10
                 font-[Mont] font-[600] text-[14px] leading-[21px]
                 text-light-theme-text dark:text-text-light border
                 border-light-theme-border-active
                 focus:outline-none focus:ring-2 focus:ring-light-theme-border-active
                 bg-[url('/icons/arrow-down.svg')] bg-no-repeat bg-[right_0.75rem_center]"
          >
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="64">64</option>
          </select>
        </div>
      </div>
      <ProductList productlist={visibleProducts} />
    </>
  );
};

export default Catalog;
