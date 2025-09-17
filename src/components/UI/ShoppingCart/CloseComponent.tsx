// #region Imports
import Image from 'next/image';
import React from 'react';
import CloseGreyBlack from '@/img/Close(GreyBlack).svg';
import CloseGreyWhite from '@/img/Close(GreyWhite).svg';
// #endregion

type Props = {
  placement?: 'default' | 'grey';
};

const CloseComponent: React.FC<Props> = ({ placement = 'default' }) => {
  const blackGrey = placement === 'grey' ? CloseGreyWhite : CloseGreyBlack;
  const whiteGrey = placement === 'grey' ? CloseGreyBlack : CloseGreyWhite;

  return (
    <>
      {/* black close */}
      <Image
        src={blackGrey}
        alt="close"
        className="dark:hidden"
      />
      {/* white close */}
      <Image
        src={whiteGrey}
        alt="close"
        className="hidden dark:block"
      />
    </>
  );
};

export default CloseComponent;
