// #region Imports

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LogoPinkDesktop from '@/img/Logo(Pink)-desktop.svg';
import LogoWhiteDesktop from '@/img/Logo(White)-desktop.svg';

// #endregion

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src={LogoWhiteDesktop}
        alt="logo"
        className="my-[13px] xl:my-[18px] h-[22px] w-[64px] xl:h-[28px] xl:w-[80px] hidden dark:block"
      />

      <Image
        src={LogoPinkDesktop}
        alt="logo"
        className="my-[13px] xl:my-[18px] h-[22px] w-[64px] xl:h-[28px] xl:w-[80px] dark:hidden"
      />
    </Link>
  );
}
