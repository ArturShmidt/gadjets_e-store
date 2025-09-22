// #region Imports
import Image from 'next/image';
import React from 'react';
import PlusBlack from '@/components/UI/icons/Close(Black).svg';
import PlusWhite from '@/components/UI/icons/Close(White).svg';
import PlusGreyWhite from '@/components/UI/icons/Close(GreyWhite).svg';
import PlusGreyBlack from '@/components/UI/icons/Close(GreyBlack).svg';
// #endregion

type Props = {
  placement?: 'default' | 'grey';
};

const PlusComponent: React.FC<Props> = ({ placement = 'default' }) => {
  const Black = placement === 'grey' ? PlusGreyWhite : PlusGreyBlack;
  const White = placement === 'grey' ? PlusGreyBlack : PlusGreyWhite;

  return (
    <>
      <Image
        src={placement === 'grey' ? Black : PlusBlack}
        alt="plus"
        className="dark:hidden pointer-events-none rotate-45"
      />
      <Image
        src={placement === 'grey' ? White : PlusWhite}
        alt="plus"
        className="hidden dark:block pointer-events-none rotate-45"
      />
    </>
  );
};

export default PlusComponent;
