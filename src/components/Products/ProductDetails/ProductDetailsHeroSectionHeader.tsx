import Link from 'next/link';
import React from 'react';
import ProductDetailsHeroSectionNavBar from './ProductDetailsHeroSectionNavBar';

interface Props {
  category: string;
  name: string;
}

const ProductDetailsHeroSectionHeader: React.FC<Props> = ({
  name,
  category,
}) => {
  return (
    <div className="p-4 dark:text-dark-theme-text">
      <ProductDetailsHeroSectionNavBar
        category={category}
        name={name}
      />
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

      <h1 className="font-bold mb-6 text-[clamp(1.5rem,5vw,3rem)]">{name}</h1>
    </div>
  );
};

export default ProductDetailsHeroSectionHeader;
