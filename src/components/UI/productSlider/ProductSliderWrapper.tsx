'use client';

import React from 'react';
import ProductSlider from './ProductSlider';
import {
  useGetBestsellersQuery,
  useGetNewProductsQuery,
  useGetRelatedProductsQuery,
} from '@/lib/features/api/apiSlice';
import { SliderType } from '@/types/SliderType';

const titleMap: Record<SliderType, string> = {
  [SliderType.New]: 'Brand new models',
  [SliderType.Bestsellers]: 'Hot prices',
  [SliderType.Related]: 'You may also like',
};

interface ProductSliderWrapperProps {
  type: string;
  productId?: string;
}

export default function ProductSliderWrapper({
  type,
  productId,
}: ProductSliderWrapperProps) {
  const { data: newProducts, isLoading: isLoadingNew } = useGetNewProductsQuery(
    undefined,
    { skip: type !== 'new' },
  );

  const { data: bestsellers, isLoading: isLoadingBestsellers } =
    useGetBestsellersQuery(undefined, { skip: type !== 'bestsellers' });

  const { data: relatedProducts, isLoading: isLoadingRelated } =
    useGetRelatedProductsQuery(productId!, {
      skip: type !== 'related' || !productId,
    });

  const isLoading = isLoadingNew;

  const products =
    type === 'new' ? newProducts
    : type === 'bestsellers' ? bestsellers
    : relatedProducts;

  const title = titleMap[type as SliderType];

  if (isLoading) {
    return <div>Loading {title}...</div>;
  }

  return (
    <ProductSlider
      title={title}
      products={products || []}
    />
  );
}
