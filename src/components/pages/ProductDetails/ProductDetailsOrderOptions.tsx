'use client';

import { useRouter } from 'next/navigation';

import FavoriteButton from '@/components/Products/FavoriteButton';
import { Product } from '@/types/product';
import OptionGroup from './ProductDetailsOptionGroup';
import Link from 'next/link';
import { ProductType } from '@/types/CategoryType';
import AddOrNavToCartButton from '@/components/UI/AddOrNavToCartButton';

interface Props {
  product: Product;
  variants: ProductType[];

  namespaceId: string;
  colorsAvailable: string[];
  capacityAvailable: string[];
  priceDiscount: number;
  priceRegular: number;
}

const colorMap: { [key: string]: string } = {
  black: 'bg-gray-900',
  gold: 'bg-amber-400',
  silver: 'bg-gray-300',
  spacegray: 'bg-gray-700',
  white: 'bg-white',
  purple: 'bg-purple-400',
  red: 'bg-red-500',
  green: 'bg-green-400',
  yellow: 'bg-yellow-400',
  midnight: 'bg-gray-900',
  blue: 'bg-blue-500',
  midnightgreen: 'bg-green-900',
  coral: 'bg-orange-400',
  rosegold: 'bg-rose-300',
  spaceblack: 'bg-gray-900',
  pink: 'bg-pink-400',
  sierrablue: 'bg-blue-300',
  graphite: 'bg-gray-700',
  skyblue: 'bg-sky-400',
  starlight: 'bg-yellow-200',
};

const ProductDetailsOrderOptions: React.FC<Props> = ({
  product,
  capacityAvailable,
  namespaceId,
  colorsAvailable,
  priceDiscount,
  priceRegular,
  variants,
}) => {
  const router = useRouter();

  return (
    <div className="text-light-theme-text dark:text-dark-theme-text w-full py-8 px-4">
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm font-medium">Available colors</p>
        <span className="text-sm font-mono text-gray-500">
          ID: {namespaceId}
        </span>
      </div>

      <OptionGroup
        paramName="color"
        options={colorsAvailable}
        product={product}
        variants={variants}
      >
        {(color, isActive, href) => (
          <Link
            key={color}
            href={href}
            scroll={false}
          >
            <button
              aria-label="Pick a color"
              className={`w-8 h-8 rounded-full p-0.5 transition-all border-2 shadow-md border-gray-300 dark:border-gray-800 cursor-pointer ${isActive ? '!border-black dark:!border-white' : ''}`}
            >
              <div
                className={`w-full h-full rounded-full ${colorMap[color] || 'bg-gray-200'}`}
              />
            </button>
          </Link>
        )}
      </OptionGroup>

      <hr className="border-gray-800 my-6" />

      <p className="text-sm font-medium mb-3">Select capacity</p>
      <div className="grid grid-cols-4 gap-2 mb-6">
        <OptionGroup
          paramName="capacity"
          options={capacityAvailable}
          product={product}
          variants={variants}
        >
          {(capacity, isActive, href) => (
            <Link
              key={capacity}
              href={href}
              scroll={false}
            >
              <button
                aria-label="Pick a capacity"
                className={`w-full flex items-center justify-center px-4 py-2 border rounded-md text-sm font-bold transition-colors cursor-pointer ${isActive ? 'dark:bg-white bg-light-theme-text text-white dark:text-dark-theme-bg border-light-theme-text' : 'border-light-theme-border-active text-gray-500 dark:hover:border-white dark:border-dark-theme-border-hover hover:border-dark-theme-bg'}`}
              >
                {capacity}
              </button>
            </Link>
          )}
        </OptionGroup>
      </div>

      <hr className="border-gray-800 my-6" />

      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl font-bold">${priceDiscount}</span>
        <span className="text-2xl text-gray-500 line-through">
          ${priceRegular}
        </span>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <div className="flex-grow w-full">
          <AddOrNavToCartButton product={product} />
        </div>
        <div className="pr-4">
          <FavoriteButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsOrderOptions;
