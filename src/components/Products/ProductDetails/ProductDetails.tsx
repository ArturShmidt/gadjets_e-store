'use client';

import React from 'react';
import phoneData from '@public/api/phones.json';
import ProductSlider from '../../UI/productSlider/ProductSlider';
import ProductDetailsHeroSection from './ProductDetailsHeroSection';
import ProductDetailsAbout from './ProductDetailsAbout';
import ProductDetailsSpecs from './ProductDetailsSpecs';
import ProductDetailsOrderOptions from './ProductDetailsOrderOptions';
import ProductDetailsHeroSectionHeader from './ProductDetailsHeroSectionHeader';

interface Props {
  productId: string;
}

type PhoneDescription = {
  title: string;
  text: string[];
};

type Phone = {
  id: string;
  category: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: PhoneDescription[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
};

const ProductDetails: React.FC<Props> = ({ productId }) => {
  const typedPhoneData: Phone[] = phoneData;

  const testPhoneData = typedPhoneData.find((el) =>
    el.id.includes('apple-iphone-14-pro'),
  );

  if (!productId || !testPhoneData) {
    return null;
  }

  const specsData = [
    { label: 'Screen', value: testPhoneData.screen },
    { label: 'Resolution', value: testPhoneData.resolution },
    { label: 'Processor', value: testPhoneData.processor },
    { label: 'RAM', value: testPhoneData.ram },
    { label: 'Built in memory', value: testPhoneData.capacity },
    { label: 'Camera', value: testPhoneData.camera },
    { label: 'Zoom', value: testPhoneData.zoom },
    { label: 'Cell', value: testPhoneData.cell.join(', ') },
  ];

  // console.log(typedPhoneData);

  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap dark:bg-dark-theme-bg ">
      <ProductDetailsHeroSectionHeader
        name={testPhoneData.name}
        category={testPhoneData.category}
      />
      <div className="w-full sm:w-1/2 sm:px-4">
        <ProductDetailsHeroSection
          category={testPhoneData.category}
          name={testPhoneData.name}
          images={testPhoneData.images}
        />
      </div>
      <div className="w-full sm:w-1/2 sm:px-4">
        <ProductDetailsOrderOptions
          namespaceId={testPhoneData.namespaceId}
          colorsAvailable={testPhoneData.colorsAvailable}
          color={testPhoneData.color}
          capacityAvailable={testPhoneData.capacityAvailable}
          capacity={testPhoneData.capacity}
          priceDiscount={testPhoneData.priceDiscount}
          priceRegular={testPhoneData.priceRegular}
        />
      </div>
      <div className="w-full lg:flex lg:gap-8 mt-8">
        <div className="w-full sm:px-4 mt-8">
          <ProductDetailsAbout description={testPhoneData.description} />
        </div>
        <div className="w-full sm:px-4 mt-8">
          <ProductDetailsSpecs specsData={specsData} />
        </div>
      </div>
      <ProductSlider />
    </div>
  );
};

export default ProductDetails;
