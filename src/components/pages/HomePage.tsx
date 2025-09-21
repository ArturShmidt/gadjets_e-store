'use client';

import React from 'react';
import Carousel from '@/components/home/Carousel/Carousel';
import ShopByCategory from '@/components/home/shopByCategory/ShopByCategory';
import { Product } from '@/types/product';
import ProductSliderWrapper from '../UI/productSlider/ProductSliderWrapper';
import { SliderType } from '@/types/SliderType';

interface Props {
  allProducts: Product[];
  hotPriceProducts: Product[];
  newModels: Product[];
}

const HomePage: React.FC<Props> = ({
  allProducts,
  hotPriceProducts,
  newModels,
}) => {
  return (
    <div className="flex flex-col pb-16 pt-6 sm:pt-8 lg:pb-20 lg:pt-14 dark:bg-dark-theme-bg">
      <div>
        <Carousel />
        <ProductSliderWrapper type={SliderType.New} />
        <ShopByCategory />
        <ProductSliderWrapper type={SliderType.Bestsellers} />
      </div>
    </div>
  );
};

export default HomePage;
