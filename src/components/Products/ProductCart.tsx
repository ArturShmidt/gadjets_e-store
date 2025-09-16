import Image from 'next/image';
import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  screen: string;
  capacity: string;
  ram: string;
  image: string;
}

interface ProductCartProps {
  product: Product;
}

const ProductCart: React.FC<ProductCartProps> = ({ product }) => {
  const imgSrc = `/${product.image}`;

  return (
    <div
      className="border border-light-theme-border-color rounded-2xl 
                        w-[287px] h-[440px] 
                        sm:w-[288px] sm:h-[506px] 
                        md:w-[229px] md:h-[506px] 
                        lg:w-[272px] lg:h-[506px]
                        dark:bg-item-bg dark:border-none dark:rounded-none"
    >
      <div className="p-8">
        <div className="relative flex justify-center h-[130px] sm:h-[196px] md:h-[196px] lg:h-[196px]">
          <Image
            src={imgSrc}
            fill
            style={{ objectFit: 'contain' }}
            alt={product.name}
          />
        </div>

        <h3
          className="font-semibold text-[14px] leading-[21px] text-light-theme-text dark:text-text-light
                      pt-[24px]"
        >
          {product.name}
        </h3>
        <div className="my-2">
          <p className="font-extrabold text-[22px] leading-snug text-light-theme-text dark:text-text-light">
            ${product.price}
          </p>
          <div className="border-b border-zinc-700 mt-2"></div>
        </div>
        <div className="space-y-2 text-sm text-gray-400">
          <div className="flex justify-between items-center">
            <span className="text-light-theme-text-menu dark:text-text-gray">
              Screen
            </span>
            <span className="text-light-theme-text dark:text-text-light font-[Mont] font-bold text-[12px]">
              {product.screen}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-light-theme-text-menu dark:text-text-gray">
              Capacity
            </span>
            <span className="text-light-theme-text dark:text-text-light font-[Mont] font-bold text-[12px]">
              {product.capacity}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-light-theme-text-menu dark:text-text-gray">
              RAM
            </span>
            <span className="text-light-theme-text dark:text-text-light font-[Mont] font-bold text-[12px]">
              {product.ram}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <button
            className="h-[40px] flex-grow 
                          bg-light-theme-button-product-bg text-white 
                          dark:bg-product-add-btn dark:text-text-light 
                            text-sm leading-[21px] rounded-md dark:rounded-none"
          >
            Add to cart
          </button>
          <button
            className="bg-white dark:bg-gray-700 p-2.5 
                            rounded-full dark:rounded-none 
                            border border-light-theme-border-active dark:border-none"
          >
            <svg
              className="w-5 h-5 dark:text-text-light"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.682a4.5 4.5 0 010-6.364z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
