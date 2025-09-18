import React from 'react';
import accessries from '@public/api/accessories.json';

const CheckoutSummary = () => {
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
          {accessries
            // TODO need create separate func
            .map((accessorie) => accessorie.priceDiscount)
            .reduce((acc, el) => el + acc, 0)}
        </span>
        <span
          className="flex items-center justify-center 
          text-light-theme-text-menu 
            text-[14px]"
        >
          Total for {accessries.length} items
        </span>
      </div>
      <button
        className="w-60 sm:w-136 lg:w-80 h-12 rounded-[8px] 
          bg-light-theme-checkout-shoppingcart dark:bg-product-add-btn-primary dark:hover:bg-dark-theme-btn-hover  
          text-white dark:text-dark-theme-text leading-[21px] font-bold text-[14px] cursor-pointer hover:shadow-md"
      >
        Checkout
      </button>
    </div>
  );
};

export default CheckoutSummary;
