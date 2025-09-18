import Image from 'next/image';
import React from 'react';
import { Product } from '@/types/product';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProductCartProps {
  product: Product;
  index?: number;
}

const ProductCart = ({ product, index = 0 }: ProductCartProps) => {
  const imgSrc = `/${product.image}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1],
        delay: index < 4 ? index * 0.15 : 0,
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="
        border border-light-theme-border-color
        rounded-2xl
        dark:bg-item-bg dark:border-dark-theme-border-color
        transition-shadow duration-700
        hover:shadow-[0_3px_13px_0_rgba(23,32,49,0.4)]
      "
    >
      <div className="p-8">
        {/* Image */}
        <Link
          href={`/products/${product.itemId}`}
          className="
            relative flex justify-center
            h-[130px] sm:h-[196px] md:h-[196px] lg:h-[196px]
          "
        >
          <Image
            src={imgSrc}
            style={{ objectFit: 'contain' }}
            width={208}
            height={196}
            alt={product.name}
            className="transition-transform duration-800 ease-in-out hover:scale-105"
          />
        </Link>

        {/* Product Name */}
        <h3 className="h-[42px] font-semibold text-[14px] leading-[21px] text-light-theme-text dark:text-text-light pt-[24px] dark:hover:text-dark-theme-btn-hover">
          <Link
            href={`/products/${product.itemId}`}
            className="hover:underline hover:text-light-theme-btn-product-bg"
          >
            {product.name}
          </Link>
        </h3>

        {/* Price */}
        <div className="my-2 pt-[21px]">
          <div className="flex gap-[8px]">
            <p className="font-extrabold text-[22px] leading-snug text-light-theme-text dark:text-text-light">
              ${product.price}
            </p>
            <p className="font-semibold text-[22px] leading-snug text-light-theme-text-menu dark:text-text-gray line-through">
              ${product.fullPrice}
            </p>
          </div>
          <div className="border-b border-zinc-700 mt-2"></div>
        </div>

        {/* Specs */}
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

        {/* Buttons */}
        <div className="flex items-center gap-2 mt-4">
          <button
            className="
              h-10 flex-grow
              bg-light-theme-btn-product-bg text-white
              dark:bg-product-add-btn dark:text-text-light
              text-sm leading-[21px]
              rounded-md
              transition-shadow duration-200
              hover:shadow-[0_3px_13px_0_rgba(23,32,49,0.4)]
              hover:cursor-pointer
              dark:hover:bg-dark-theme-btn-hover
            "
          >
            Add to cart
          </button>

          <button
            className="
              bg-white dark:bg-gray-700
              p-2.5 rounded-full
              border border-light-theme-border-active
              hover:border-light-theme-text hover:cursor-pointer
              dark:hover:bg-dark-theme-border-hover dark:hover:border-dark-theme-border-color
              transition-shadow duration-200
              hover:shadow-[0_3px_13px_0_rgba(23,32,49,0.4)]
            "
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
    </motion.div>
  );
};

export default ProductCart;
