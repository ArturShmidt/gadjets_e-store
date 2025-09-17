// #region Imports
import Image from 'next/image';
import React from 'react';
import ArrowUpBlack from '@/img/ArrowUp(Black).svg';
import ArrowUpWhite from '@/img/ArrowUp(White).svg';
// #endregion

const ArrowUpComponent: React.FC = () => {
  return (
    <>
      {/* black close */}

      <Image
        src={ArrowUpBlack}
        alt="ArrowUp"
        className="dark:hidden"
      />

      {/* white close */}

      <Image
        src={ArrowUpWhite}
        alt="ArrowUp"
        className="hidden dark:block"
      />
    </>
  );
};

export default ArrowUpComponent;
