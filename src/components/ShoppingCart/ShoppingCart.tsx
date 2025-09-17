'use client';
// #region Imports

import React from 'react';
import ShoppingCartItem from './ShoppingCartItem';
import accessries from '../../../public/api/accessories.json';
import ArrowLeftComponent from '../UI/ShoppingCart/ArrowLeftComponent';
import CheckoutSummary from './CheckoutSummary';
import { useRouter } from 'next/navigation';

// #endregion

const ShoppingCart: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <div
        className="pt-6 sm:pt-10 px-4 sm:px-6 lg:px-8 lg:pb-20 lg:flex lg:flex-col
      text-light-theme-text dark:text-dark-theme-text dark:bg-dark-theme-bg "
      >
        <div className="lg:flex lg:justify-start lg:items-start lg:flex-col">
          <button
            onClick={() => router.back()}
            className="flex mb-6 sm:mb-4 w-13 cursor-pointer"
          >
            <div
              className="mr-1 
          text-light-theme-text dark:text-dark-theme-text "
            >
              <ArrowLeftComponent />
            </div>
            <span className="text-light-theme-text-menu dark:text-dark-theme-text font-bold text-[12px] ">
              Back
            </span>
          </button>
          <h2 className="font-bold text-[32px] sm:text-[48px] leading-[41px] sm:leading-[56px] text-light-theme-text dark:text-dark-theme-text">
            Cart
          </h2>
        </div>
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
          <div className=" flex justify-center  pb-14 lg:pb-0 ">
            <CheckoutSummary />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
