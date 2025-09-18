'use client';
// #region Imports

import React from 'react';
import ShoppingCartItem from '@/components/Products/ShoppingCart/ShoppingCartItem';
import accessries from '@public/api/accessories.json';
import CheckoutSummary from '@/components/Products/ShoppingCart/CheckoutSummary';
import CartHeading from '@/components/UI/ShoppingCart/CartHeading';

// #endregion

const ShoppingCart: React.FC = () => {
  return (
    <>
      <CartHeading />
      <div
        className=" px-4 lg:px-8 lg:flex lg:flex-col
      text-light-theme-text dark:text-dark-theme-text dark:bg-dark-theme-bg mb-14 sm:mb-16 lg:mb-20"
      >
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center lg:gap-4 pt-8">
          <div className="flex items-center  flex-col gap-4 pb-8 lg:py-0">
            {accessries.slice(0, 4).map((accessorie) => {
              return (
                <ShoppingCartItem
                  key={accessorie.id}
                  product={accessorie}
                />
              );
            })}
          </div>
          <div className=" flex justify-center  lg:pb-0 ">
            <CheckoutSummary />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
