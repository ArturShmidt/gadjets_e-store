import React from 'react';
import Link from 'next/link';

interface Props {
  category: string;
  name: string;
}

const ProductDetailsHeroSectionNavBar: React.FC<Props> = ({
  category,
  name,
}) => {
  return (
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
  );
};

export default ProductDetailsHeroSectionNavBar;
