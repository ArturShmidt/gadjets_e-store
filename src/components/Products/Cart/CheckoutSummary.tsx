'use client';

import React from 'react';

interface CheckoutSummaryProps {
  totalPrice: number;
  itemsCount: number;
}

const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({
  totalPrice,
  itemsCount,
}) => {
  return (
    <div
      className="w-72 h-[190px] lg:h-[206px] sm:w-148 lg:w-92
  flex flex-col justify-center items-center gap-4 lg:gap-6
  border rounded-[16px] border-light-theme-border-color dark:border-dark-theme-border-color
  "
    >
      <div
        className="pb-4 lg:pb-6 w-60 sm:w-136 lg:w-80
        border-b border-light-theme-border-color dark:border-dark-theme-border-color"
      >
        <span
          className="flex items-center justify-center 
          font-bold text-[32px] leading-[41px]"
        >
          ${totalPrice}
        </span>
        <span
          className="flex items-center justify-center 
          text-light-theme-text-menu 
            text-sm"
        >
          Total for {itemsCount} items
        </span>
      </div>
      <button
        className="w-60 sm:w-136 lg:w-80 h-12 flex justify-center items-center
            bg-light-theme-btn-product-bg text-white
            dark:bg-product-add-btn dark:text-text-light
            text-sm 
            rounded-[8px]
            transition-transform duration-500
            hover:shadow-[0_0_13px_0_rgba(23,32,49,0.4)]
            hover:cursor-pointer
            dark:hover:bg-dark-theme-btn-hover
            hover:scale-105
            leading-[21px] font-[700] cursor-pointer"
      >
        Checkout
      </button>
    </div>
  );
};

export default CheckoutSummary;
