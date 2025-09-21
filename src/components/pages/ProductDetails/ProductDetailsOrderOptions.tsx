// Утиліта для нормалізації назв кольорів (без пробілів, дефісів, регістрів)
function normalizeColorName(color: string): string {
  return color.toLowerCase().replace(/\s+/g, '').replace(/-/g, '');
}
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import { ProductType } from '@/types/CategoryType';

interface Props {
  namespaceId: string;
  colorsAvailable: string[];
  color: string;
  capacityAvailable: string[];
  capacity: string;
  priceDiscount: number;
  priceRegular: number;
  variants: ProductType[];
}

const ProductDetailsOrderOptions: React.FC<Props> = ({
  color,
  capacity,
  capacityAvailable,
  namespaceId,
  colorsAvailable,
  priceDiscount,
  priceRegular,
  variants,
}) => {
  const [selectedColor, setSelectedColor] = useState(color);
  const [selectedCapacity, setSelectedCapacity] = useState(capacity);
  const router = useRouter();

  const handleChange = (newColor: string, newCapacity: string) => {
    setSelectedColor(newColor);
    setSelectedCapacity(newCapacity);
    const found = variants.find(
      (v) => v.color === newColor && v.capacity === newCapacity,
    );
    if (found) {
      router.push(`/products/${found.id}`);
    }
  };

  return (
    <div className="text-light-theme-text dark:text-dark-theme-text w-full py-8 px-4">
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm font-medium">Available colors</p>
        <span className="text-sm font-mono text-gray-500">
          ID: {namespaceId}
        </span>
      </div>
      <div className="flex gap-3">
        {colorsAvailable.map((colorOption: string) => {
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
          const normalized = normalizeColorName(colorOption);
          const normalizedSelected = normalizeColorName(selectedColor);
          const isSelected = normalized === normalizedSelected;
          return (
            <button
              key={colorOption}
              onClick={() => handleChange(colorOption, selectedCapacity)}
              className={`w-8 h-8 rounded-full p-0.5 transition-all border-2 shadow-md
                border-gray-300 dark:border-gray-800 cursor-pointer
                ${isSelected ? '!border-black dark:!border-white' : ''}
              `}
            >
              <div
                className={`w-full h-full rounded-full ${colorMap[normalized] || 'bg-gray-200'}`}
                style={{ boxShadow: '0 0 0 2px rgba(0,0,0,0.08)' }}
              />
            </button>
          );
        })}
      </div>
      <hr className="border-gray-800 my-6" />

      <p className="text-sm font-medium mb-3 text-light-theme-text dark:text-dark-theme-text">
        Select capacity
      </p>
      <div className="grid grid-cols-4 gap-2 mb-6">
        {capacityAvailable.map((capacityOption: string) => {
          const isSelected = capacityOption === selectedCapacity;
          return (
            <button
              key={capacityOption}
              onClick={() => handleChange(selectedColor, capacityOption)}
              className={`flex items-center justify-center px-4 py-2 border rounded-md text-sm font-bold transition-colors cursor-pointer
            ${
              isSelected ?
                'dark:bg-white bg-light-theme-text text-white dark:text-dark-theme-bg border-light-theme-text'
              : 'border-light-theme-border-active  text-gray-500 dark:hover:border-white dark:border-dark-theme-border-hover hover:border-dark-theme-bg'
            }
          `}
            >
              {capacityOption}
            </button>
          );
        })}
      </div>
      <hr className="border-gray-800 my-6" />

      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl font-bold">${priceDiscount}</span>
        <span className="text-2xl text-gray-500 line-through">
          ${priceRegular}
        </span>
      </div>

      <div className="flex gap-2">
        <button
          className="flex-grow hover:cursor-pointer bg-light-theme-btn-product-bg text-white
                  dark:bg-product-add-btn dark:text-text-light dark:hover:bg-dark-theme-btn-hover
                    font-bold py-3 rounded-md transition-shadow duration-200
                    hover:shadow-[0_3px_13px_0_rgba(23,32,49,0.4)]"
        >
          Add to cart
        </button>
        <button className="w-14 h-14 flex items-center cursor-pointer justify-center border dark:hover:border-white dark:bg-product-add-btn-selected dark:border-product-add-btn-selected border-light-theme-border-active hover:border-light-theme-text rounded-md transition-colors">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-black dark:stroke-white transition-colors"
          >
            <path
              d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
              strokeWidth="2"
              fill="transparent"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsOrderOptions;
