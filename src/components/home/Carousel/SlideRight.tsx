// #region Imports

import React from 'react';
import Image from 'next/image';

// #endregion

export interface SlideProps {
  slide: {
    product: string;
    productSlogan: string;
    image: string;
  };
}

const productTitleClass = `
  font-[SF Pro Display] font-[590] text-white text-3xl
  sm:text-[18px] md:text-[24px] lg:text-[36px] lg:pt-8
`;

const productSloganClass = `
  font-[SF Pro Display] font-[400] text-[#9B9B9B] text-xs
  pt-2 sm:pt-0 sm:text-[8px] md:text-[10px] lg:text-[14px]
`;

const SlideRight: React.FC<SlideProps> = ({ slide }) => (
  <div className="w-full flex flex-col justify-center items-center h-full pt-6">
    <div className="text-center">
      <h2 className={productTitleClass}>{slide.product}</h2>
      <p className={productSloganClass}>{slide.productSlogan}</p>
    </div>

    <div className="flex-1 flex flex-col justify-end items-center">
      <Image
        src={slide.image}
        alt={slide.product}
        width={574}
        height={341}
        className="w-[230px] sm:w-[200px] md:w-[250px] lg:w-[400px]"
      />
    </div>
  </div>
);

export default SlideRight;
