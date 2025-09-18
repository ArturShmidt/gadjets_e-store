'use client';

// #region Imports

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { ProductType } from '@/types/CategoryType';
import MinusComponent from '@/components/UI/ShoppingCart/MinusComponent';
import PlusComponent from '@/components/UI/ShoppingCart/PlusComponent';
import CloseComponent from '@/components/UI/ShoppingCart/CloseComponent';

// #endregion

type Props = {
  product: ProductType;
};

const ShoppingCartItem: React.FC<Props> = ({ product }) => {
  const [count, setCount] = useState(1);

  return (
    <>
      <div
        className="sm:w-148 sm:h-32 p-4 sm:p-6 flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 items-center
      bg-white dark:bg-item-bg 
      border rounded-[16px] border-light-theme-border-color dark:border-dark-theme-border-color"
      >
        <div className="flex justify-between gap-4 sm:gap-6">
          <button
            className="w-4 h-4 flex items-center justify-center m-auto 
          cursor-pointer"
          >
            <CloseComponent placement="grey" />
          </button>
          <div className="w-[80px] h-[80px] flex items-center justify-center">
            <Image
              src={`/${product.images[0]}`}
              alt={product.name}
              width={66}
              height={66}
              className="object-contain"
            />
          </div>
          <Link
            // TODO need to be refactored in future
            href={`/products/${product.id}`}
            className="text-[14px] flex items-center w-32 sm:w-44 "
          >
            {product.name}
          </Link>
        </div>

        <div className="w-64 h-8">
          <div
            className="flex justify-between sm:justify-start items-center sm:gap-6
            h-full"
          >
            <div className="flex items-center w-24">
              <button
                className={`w-8 h-8 flex items-center justify-center 
                  border rounded-[48px] border-light-theme-border-color dark:border-dark-theme-border-color 
                  text-light-theme-border-active dark:text-dark-theme-border-hover
                  ${count === 1 ? 'cursor-not-event' : 'cursor-pointer'}`}
                onClick={() => setCount((prev) => prev - 1)}
                disabled={count === 1}
              >
                {count === 1 ?
                  <MinusComponent placement="grey" />
                : <MinusComponent />}
              </button>
              <span className="w-8 h-8 flex items-center justify-center">
                {count}
              </span>
              <button
                className="w-8 h-8 flex items-center justify-center 
                border dark:border-0 rounded-[48px] border-light-theme-border-active 
                text-black dark:text-dark-theme-text 
                bg-white dark:bg-dark-theme-btn-selected 
                cursor-pointer"
                onClick={() => setCount((prev) => prev + 1)}
              >
                <PlusComponent />
              </button>
            </div>
            <span
              className="flex justify-end sm:w-20
            text-light-theme-text dark:text-dark-theme-text leading-[1.4] tracking-normal font-bold text-[22px]"
            >
              ${product.priceDiscount * count}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartItem;
