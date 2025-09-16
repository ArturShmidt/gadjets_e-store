import Link from 'next/link';
import React from 'react';
import ProductDetailsHeroSectionSlider from './ProductDetailsHeroSectionSlider';

interface Props {
  category: string;
  name: string;
  images: string[];
}

const ProductDetailsHeroSection: React.FC<Props> = ({
  category,
  name,
  images,
}) => {
  return (
    <div className=" text-light-theme-text dark:text-dark-theme-text p-4 max-w-md mx-auto">
      <nav className="flex items-center text-sm mb-4 sm:pb-6">
        <Link
          href="/"
          className="hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={`/${category}`}
          className="hover:text-white capitalize"
        >
          {category}
        </Link>
        <span className="mx-2">/</span>
        <span className="truncate text-gray-500">{name}</span>
      </nav>

      <Link
        href={`/${category}`}
        className="flex items-center gap-2 text-sm font-medium mb-4 hover:text-gray-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        Back
      </Link>

      <h1 className="text-2xl font-bold mb-6">{name}</h1>

      <ProductDetailsHeroSectionSlider
        name={name}
        images={images}
      />
    </div>
  );
};

export default ProductDetailsHeroSection;
