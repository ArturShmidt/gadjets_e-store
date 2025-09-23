import React from 'react';
import Carousel from '@/components/home/Carousel/Carousel';
// import ProductSliderWrapper from '../UI/productSlider/ProductSliderWrapper';
// import { SliderType } from '@/types/SliderType';
import CategoryShowcase from '../home/CategoryShowcase/CategoryShowcase';
import { Product } from '@/types/product';
import { CategoryWithCount } from '@/types/CategoryType';
import ProductSlider from '../UI/productSlider/ProductSlider';
import { SliderType } from '@/types/SliderType';

interface Props {
  newProducts: Product[];
  bestsellers: Product[];
  categories: CategoryWithCount[];
}

const HomePage: React.FC<Props> = ({
  newProducts,
  bestsellers,
  categories,
}) => {
  return (
    <div className="flex flex-col pb-16 pt-6 sm:pt-8 lg:pb-20 lg:pt-14 dark:bg-dark-theme-bg">
      <div>
        <Carousel />

        <ProductSlider
          title={SliderType.New}
          products={newProducts || []}
        />

        <CategoryShowcase categories={categories} />
        <ProductSlider
          title={SliderType.Bestsellers}
          products={bestsellers || []}
        />
        {/* TODO check SSR rendering results and if ok - delete comment and ProductSliderWrapper from code and project 
        AND! unused imports*/}
        {/* <ProductSliderWrapper type={SliderType.New} />
        <ProductSliderWrapper type={SliderType.Bestsellers} /> */}
      </div>
    </div>
  );
};

export default HomePage;
