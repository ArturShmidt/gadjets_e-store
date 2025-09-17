import Image from 'next/image';
import React from 'react';
import HomeIconBlack from '@/components/UI/icons/HomeIcon(Black).svg';
import HomeIconWhite from '@/components/UI/icons/HomeIcon(White).svg';

const HomeIconComponent = () => {
  return (
    <>
      <Image
        src={HomeIconBlack}
        alt="HomeIcon(Black)"
        className="hidden dark:block"
      />

      <Image
        src={HomeIconWhite}
        alt="HomeIcon(White)"
        className="dark:hidden"
      />
    </>
  );
};

export default HomeIconComponent;
