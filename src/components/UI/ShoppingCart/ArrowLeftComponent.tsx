// #region Imports

import ArrowLeftBlack from '@/img/ArrowLeft(Black).svg';
import ArrowLeftWhite from '@/img/ArrowLeft(White).svg';
import Image from 'next/image';
import React from 'react';
// #endregion

const ArrowLeftComponent: React.FC = () => {
  return (
    <>
      {/* black cart */}

      <Image
        src={ArrowLeftBlack}
        alt="ArrowLeft"
        className="dark:hidden"
      />

      {/* white cart */}

      <Image
        src={ArrowLeftWhite}
        alt="ArrowLeft"
        className="hidden dark:block"
      />
    </>
  );
};

export default ArrowLeftComponent;
