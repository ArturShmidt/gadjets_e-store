import Image from 'next/image';
import React from 'react';
import phoneImage from '@public/img/phones/apple-iphone-14-pro/gold/00.webp';

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

// відображення
const ProductCart: React.FC<ProductCartProps> = ({ product }) => {
  const imgSrc = `/${product.image}`;

  return (
    <div className="w-[212px] h-[439px] bg-item-bg">
      <div className="p-8">
        <div className="flex justify-center">
          <Image
            src={imgSrc}
            width={148}
            height={123}
            sizes="(max-width: 639px) 148px, (max-width: 1199px) 173px, 208px"
            alt="Phone image"
          />
        </div>

        <h3 className="font-semibold text-[14px] leading-[21px] text-white">
          {product.name}
        </h3>
        <div className="my-2">
          <p className="font-extrabold text-[22px] leading-snug text-white">
            ${product.price}
          </p>
          <div className="border-b border-zinc-700 mt-2"></div>
        </div>
        <div className="space-y-2 text-sm text-gray-400">
          <div className="flex justify-between items-center">
            <span>Screen</span>
            <span className="text-white">{product.screen}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Capacity</span>
            <span className="text-white">{product.capacity}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>RAM</span>
            <span className="text-white">{product.ram}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <button className="h-[40px]  flex-grow bg-product-add-btn text-white text-sm leading-[21px] rounded-md">
            Add to cart
          </button>
          <button className="bg-gray-700 p-2.5 rounded-md ">
            <svg
              className="w-5 h-5 text-white"
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
