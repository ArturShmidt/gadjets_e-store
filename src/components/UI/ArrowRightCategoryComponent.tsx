// #region Imports

import ArrowRightCategoryBlack from '@/components/UI/icons/ArrowRightCategory(Black).svg';
import ArrowRightCategoryWhite from '@/components/UI/icons/ArrowRightCategory(White).svg';
import Image from 'next/image';
import React from 'react';
// #endregion

const ArrowRightCategoryComponent: React.FC = () => {
  return (
    <>
      <Image
        src={ArrowRightCategoryWhite}
        alt="ArrowLeftBlack"
        className="dark:hidden"
      />

      <Image
        src={ArrowRightCategoryBlack}
        alt="ArrowLeftWhite"
        className="hidden dark:block"
      />
    </>
  );
};

export default ArrowRightCategoryComponent;
