// #region Imports

import ArrowLeftBlack from '@/components/UI/icons/ArrowLeft(Black).svg';
import ArrowLeftWhite from '@/components/UI/icons/ArrowLeft(White).svg';
import Image from 'next/image';
import React from 'react';
// #endregion

const ArrowLeftComponent: React.FC = () => {
  return (
    <>
      <Image
        src={ArrowLeftBlack}
        alt="ArrowLeftBlack"
        className="dark:hidden"
      />

      <Image
        src={ArrowLeftWhite}
        alt="ArrowLeftWhite"
        className="hidden dark:block"
      />
    </>
  );
};

export default ArrowLeftComponent;
