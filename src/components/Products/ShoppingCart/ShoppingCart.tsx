'use client';
// #region Imports

import React from 'react';
import ShoppingCartItem from '@/components/Products/ShoppingCart/ShoppingCartItem';
import accessries from '@public/api/accessories.json';
import CheckoutSummary from '@/components/Products/ShoppingCart/CheckoutSummary';

// #endregion

const ShoppingCart: React.FC = () => {
  return (
    <div
      className="pt-6 sm:pt-10 px-4 sm:px-6 lg:px-8 lg:flex lg:flex-col
      text-light-theme-text dark:text-dark-theme-text dark:bg-dark-theme-bg "
    >
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center lg:gap-4 pt-8">
        <div className="flex items-center  flex-col gap-4 py-8 lg:py-0">
          {accessries.map((accessorie) => {
            return (
              <ShoppingCartItem
                key={accessorie.id}
                product={accessorie}
              />
            );
          })}
        </div>
        <div className=" flex justify-center pb-14 lg:pb-0 ">
          <CheckoutSummary />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
