// #region Imports
import Image from 'next/image';
import React from 'react';
import PlusGreyBlack from '@/components/UI/icons/Plus(GreyBlack).svg';
import PlusGreyWhite from '@/components/UI/icons/Plus(GreyWhite).svg';
// #endregion

type Props = {
  variant?: 'default' | 'grey';
};

const PlusComponent: React.FC<Props> = ({ variant = 'default' }) => {
  const greyBlack = variant === 'grey' ? PlusGreyWhite : PlusGreyBlack;
  const greyWhite = variant === 'grey' ? PlusGreyBlack : PlusGreyWhite;

  return (
    <>
      {/* black plus */}
      <Image
        src={greyBlack}
        alt="plus"
        className="dark:hidden"
      />
      {/* white plus */}
      <Image
        src={greyWhite}
        alt="plus"
        className="hidden dark:block"
      />
    </>
  );
};

export default PlusComponent;
