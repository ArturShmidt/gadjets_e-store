import React, { useState } from 'react';

interface Props {
  namespaceId: string;
  colorsAvailable: string[];
  color: string;
  capacityAvailable: string[];
  capacity: string;
  priceDiscount: number;
  priceRegular: number;
}

const ProductDetailsOrderOptions: React.FC<Props> = ({
  color,
  capacity,
  capacityAvailable,
  namespaceId,
  colorsAvailable,
  priceDiscount,
  priceRegular,
}) => {
  const [selectedColor, setSelectedColor] = useState(color);
  const [selectedCapacity, setSelectedCapacity] = useState(capacity);
  return (
    <div className="text-light-theme-text dark:text-dark-theme-text w-full py-8 px-4">
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm font-medium">Available colors</p>
        <span className="text-sm font-mono text-gray-500">
          ID: {namespaceId}
        </span>
      </div>
      <div className="flex gap-3">
        {colorsAvailable.map((color) => {
          const colorMap: { [key: string]: string } = {
            black: 'bg-gray-900',
            gold: 'bg-amber-400',
            silver: 'bg-gray-300',
            spacegray: 'bg-gray-700',
            white: 'bg-white',
            purple: 'bg-purple-400',
            red: 'bg-red-500',
            green: 'bg-green-400',
          };
          const isSelected = color === selectedColor;
          return (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-8 h-8 rounded-full p-0.5 transition-all ${isSelected ? 'border-2 border-white' : 'border-2 border-transparent'}`}
            >
              <div
                className={`w-full h-full rounded-full ${colorMap[color] || 'bg-gray-200'}`}
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
        {capacityAvailable.map((capacity) => {
          const isSelected = capacity === selectedCapacity;
          return (
            <button
              key={capacity}
              onClick={() => setSelectedCapacity(capacity)}
              className={`flex items-center justify-center px-4 py-2 border rounded-md text-sm font-bold transition-colors
            ${
              isSelected ?
                'bg-white text-gray-900 border-black'
              : 'border-gray-700  text-gray-500 hover:border-white'
            }
          `}
            >
              {capacity}
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
        <button className="w-14 h-14 flex items-center justify-center bg-gray-800 border border-gray-700 hover:border-white rounded-md transition-colors">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
              stroke="white"
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
