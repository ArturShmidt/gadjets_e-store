import React from 'react';
import Carousel from '@/components/home/Carousel/Carousel';
import ProductSliderWrapper from '../UI/productSlider/ProductSliderWrapper';
import { SliderType } from '@/types/SliderType';
import CategoryShowcase from '../home/CategoryShowcase/CategoryShowcase';

const HomePage = ({}) => {
  return (
    <div className="flex flex-col pb-16 pt-6 sm:pt-8 lg:pb-20 lg:pt-14 dark:bg-dark-theme-bg">
      <div>
        <Carousel />
        <ProductSliderWrapper type={SliderType.New} />
        <CategoryShowcase />
        <ProductSliderWrapper type={SliderType.Bestsellers} />
      </div>
    </div>
  );
};

export default HomePage;
