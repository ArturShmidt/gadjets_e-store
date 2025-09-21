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

import { useEffect, useState } from 'react';

const ProductDetails = ({ initialProduct }: { initialProduct: Product }) => {
  const {
    data: product = initialProduct, // Використовуємо initialProduct як початкове значення
    isError,
  } = useGetProductByIdQuery(initialProduct.id);

  // Стан для всіх варіантів цієї серії
  const [variants, setVariants] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchVariants() {
      // Динамічно визначаємо файл для категорії
      let file = '';
      if (product.category === 'phones') file = 'phones.json';
      else if (product.category === 'tablets') file = 'tablets.json';
      else if (product.category === 'accessories') file = 'accessories.json';
      if (!file) return setVariants([]);
      const res = await fetch(`/api/${file}`);
      const all = await res.json();
      setVariants(
        all.filter((p: Product) => p.namespaceId === product.namespaceId),
      );
    }
    fetchVariants();
  }, [product.namespaceId, product.category]);

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
          variants={variants}
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
      {/* TODO add data for slider here */}
      {/* <ProductSlider title={'You may also like'} /> */}
    </div>
  );
};

export default ProductDetails;
