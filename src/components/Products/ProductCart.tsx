import Image from 'next/image';
import React from 'react';
import { Product } from '@/types/product';
import Link from 'next/link';
import { motion } from 'framer-motion';

import FavoriteButton from '@/components/Products/FavoriteButton';
import AddToCartButton from '@/components/Products/AddToCartButton';

import { toast } from 'sonner';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

interface ProductCartProps {
  product: Product;
  index?: number;
  disableOnce?: boolean;
}

const ProductCart = ({
  product,
  index = 0,
  disableOnce = false,
}: ProductCartProps) => {
  const imgSrc = `/${product.image}`;

  const isInCart = useSelector((state: RootState) =>
    state.persisted.cart.items.some(
      (item) => item.productId === product.itemId,
    ),
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1],
        delay: index < 4 ? index * 0.15 : 0,
      }}
      viewport={{ once: !disableOnce, amount: 0.3 }}
      className="
        border border-light-theme-border-color
        rounded-2xl
        dark:bg-item-bg dark:border-dark-theme-border-color
        transition-shadow duration-700
        hover:shadow-[0_3px_13px_0_rgba(23,32,49,0.4)]
      "
    >
      <div className="p-8">
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
            className="transition-transform duration-600 ease-in-out hover:scale-110"
          />
        </Link>

        <h3 className="h-[42px] font-semibold text-[14px] leading-[21px] text-light-theme-text dark:text-text-light pt-[24px] ">
          <Link
            href={`/products/${product.itemId}`}
            className="hover:underline hover:text-light-theme-btn-product-bg dark:hover:text-dark-theme-btn-hover"
          >
            {product.name}
          </Link>
        </h3>

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
          {isInCart ?
            <Link
              href="/cart"
              className="
                h-[35px] w-[80%] flex justify-center items-center
              bg-white text-[#333] border border-light-theme-border-color hover:border-light-theme-border-active
              dark:bg-gray-700 dark:text-text-light dark:border-none
                text-sm leading-[21px]
                rounded-[8px]
                transition-transform duration-500
                hover:shadow-[0_0_13px_0_rgba(23,32,49,0.4)]
                hover:cursor-pointer
              dark:hover:bg-dark-theme-border-hover
                hover:scale-105
              "
            >
              Already in cart
            </Link>
          : <AddToCartButton
              product={product}
              onClick={() => toast.success(`${product.name} add to cart!`)}
            />
          }
          <FavoriteButton product={product} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCart;
