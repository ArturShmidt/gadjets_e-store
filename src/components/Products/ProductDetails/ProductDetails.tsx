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

  const phoneDetails = typedPhoneData.find((el) => el.id === productId);

  if (!productId || !phoneDetails) {
    return;
  }

  console.log(productId);

  const specsData = [
    { label: 'Screen', value: phoneDetails.screen },
    { label: 'Resolution', value: phoneDetails.resolution },
    { label: 'Processor', value: phoneDetails.processor },
    { label: 'RAM', value: phoneDetails.ram },
    { label: 'Built in memory', value: phoneDetails.capacity },
    { label: 'Camera', value: phoneDetails.camera },
    { label: 'Zoom', value: phoneDetails.zoom },
    { label: 'Cell', value: phoneDetails.cell.join(', ') },
  ];

  // console.log(typedPhoneData);

  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap dark:bg-dark-theme-bg ">
      <ProductDetailsHeroSectionHeader
        name={phoneDetails.name}
        category={phoneDetails.category}
      />
      <div className="w-full sm:w-1/2 sm:px-4">
        <ProductDetailsHeroSection
          category={phoneDetails.category}
          name={phoneDetails.name}
          images={phoneDetails.images}
        />
      </div>
      <div className="w-full sm:w-1/2 sm:px-4">
        <ProductDetailsOrderOptions
          namespaceId={phoneDetails.namespaceId}
          colorsAvailable={phoneDetails.colorsAvailable}
          color={phoneDetails.color}
          capacityAvailable={phoneDetails.capacityAvailable}
          capacity={phoneDetails.capacity}
          priceDiscount={phoneDetails.priceDiscount}
          priceRegular={phoneDetails.priceRegular}
        />
      </div>
      <div className="w-full lg:flex lg:gap-8 mt-8">
        <div className="w-full sm:px-4 mt-8">
          <ProductDetailsAbout description={phoneDetails.description} />
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
