'use client';

import React from 'react';
import ProductSlider from '../../UI/productSlider/ProductSlider';
import ProductDetailsHeroSection from './ProductDetailsHeroSection';
import ProductDetailsAbout from './ProductDetailsAbout';
import ProductDetailsSpecs from './ProductDetailsSpecs';
import ProductDetailsOrderOptions from './ProductDetailsOrderOptions';
import ProductDetailsHeroSectionHeader from './ProductDetailsHeroSectionHeader';

import { ProductType as Product } from '@/types/CategoryType';
import { useGetProductByIdQuery } from '@/lib/features/api/apiSlice';

const ProductDetails = ({ initialProduct }: { initialProduct: Product }) => {
  const {
    data: product = initialProduct, // Використовуємо initialProduct як початкове значення
    isError,
  } = useGetProductByIdQuery(initialProduct.id);

  // if (isLoading) {
  //   // Цей стан буде видимий тільки при клієнтській навігації
  //   return <div>Завантаження деталей товару...</div>;
  // }

  if (isError) {
    return <div>Помилка оновлення даних.</div>;
  }

  const allSpecs = [
    { label: 'Screen', value: product.screen },
    { label: 'Resolution', value: product.resolution },
    { label: 'Processor', value: product.processor },
    { label: 'RAM', value: product.ram },
    { label: 'Built in memory', value: product.capacity },
    { label: 'Camera', value: product.camera },
    { label: 'Zoom', value: product.zoom },
    { label: 'Cell', value: product.cell.join(', ') },
  ];

  const specsData = allSpecs.filter(
    (spec): spec is { label: string; value: string } =>
      spec.value !== undefined,
  );

  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap dark:bg-dark-theme-bg ">
      <ProductDetailsHeroSectionHeader
        name={product.name}
        category={product.category}
      />
      <div className="w-full sm:w-1/2 sm:px-4">
        <ProductDetailsHeroSection
          category={product.category}
          name={product.name}
          images={product.images}
        />
      </div>
      <div className="w-full sm:w-1/2 sm:px-4">
        <ProductDetailsOrderOptions
          namespaceId={product.namespaceId}
          colorsAvailable={product.colorsAvailable}
          color={product.color}
          capacityAvailable={product.capacityAvailable}
          capacity={product.capacity}
          priceDiscount={product.priceDiscount}
          priceRegular={product.priceRegular}
        />
      </div>
      <div className="w-full lg:flex lg:gap-8 mt-8">
        <div className="w-full sm:px-4 mt-8">
          <ProductDetailsAbout description={product.description} />
        </div>
        <div className="w-full sm:px-4 mt-8">
          <ProductDetailsSpecs specsData={specsData} />
        </div>
      </div>
      <ProductSlider title={'You may also like'} />
    </div>
  );
};

export default ProductDetails;
