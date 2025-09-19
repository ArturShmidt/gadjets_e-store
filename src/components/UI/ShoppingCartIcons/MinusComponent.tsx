// #region Imports
import Image from 'next/image';
import React from 'react';

import MinusGreyBlack from '@/components/UI/icons/Minus(GreyBlack).svg';
import MinusGreyWhite from '@/components/UI/icons/Minus(GreyWhite).svg';
// #endregion

type Props = {
  placement?: 'default' | 'grey';
};

const MinusComponent: React.FC<Props> = ({ placement = 'default' }) => {
  const greyBlack = placement === 'grey' ? MinusGreyBlack : MinusGreyWhite;
  const greyWhite = placement === 'grey' ? MinusGreyWhite : MinusGreyBlack;

  return (
    <>
      {/* black minus */}
      <Image
        src={greyWhite}
        alt="minus"
        className="dark:hidden pointer-events-none"
      />
      {/* white minus */}
      <Image
        src={greyBlack}
        alt="minus"
        className="hidden dark:block pointer-events-none"
      />
    </>
  );
};

export default MinusComponent;
