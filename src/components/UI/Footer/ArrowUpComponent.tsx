// #region Imports

import Image from 'next/image';
import React from 'react';
import ArrowUpBlack from '@/components/UI/icons/ArrowUp(Black).svg';
import ArrowUpWhite from '@/components/UI/icons/ArrowUp(White).svg';

// #endregion

const ArrowUpComponent: React.FC = () => {
  return (
    <>
      <Image
        src={ArrowUpBlack}
        alt="ArrowUpBlack"
        className="dark:hidden"
      />
      <Image
        src={ArrowUpWhite}
        alt="ArrowUpWhite"
        className="hidden dark:block"
      />
    </>
  );
};

export default ArrowUpComponent;
