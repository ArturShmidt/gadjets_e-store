import Link from 'next/link';
import React from 'react';
import ProductDetailsHeroSectionSlider from './ProductDetailsHeroSectionSlider';
import ProductDetailsHeroSectionNavBar from './ProductDetailsHeroSectionNavBar';
import ProductDetailsHeroSectionHeader from './ProductDetailsHeroSectionHeader';

interface Props {
  category: string;
  name: string;
  images: string[];
}

const ProductDetailsHeroSection: React.FC<Props> = ({ name, images }) => {
  return (
    <div className=" text-light-theme-text dark:text-dark-theme-text p-4 max-w-md mx-auto">
      <ProductDetailsHeroSectionSlider
        name={name}
        images={images}
      />
    </div>
  );
};

export default ProductDetailsHeroSection;
