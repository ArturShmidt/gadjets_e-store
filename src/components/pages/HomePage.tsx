'use client';

import React from 'react';
import Carousel from '@/components/Layout/Carousel/Carousel';
import ProductSlider from '@/components/UI/productSlider/ProductSlider';
import ShopByCategory from '@/components/Layout/shopByCategory/ShopByCategory';
import { Product } from '@/types/product';

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
        <ProductSlider
          title="Brand new models"
          products={newModels}
        />
        <ShopByCategory />
        <ProductSlider
          title="Hot prices"
          products={hotPriceProducts}
        />
      </div>
    </div>
  );
};

export default HomePage;
