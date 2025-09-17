// #region Imports

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LogoPinkDesktop from '@/components/UI/icons/Logo(Pink)-desktop.svg';
import LogoWhiteDesktop from '@/components/UI/icons/Logo(White)-desktop.svg';

// #endregion
interface LogoProps {
  placement?: 'navbar' | 'footer';
}
const Logo = ({ placement = 'navbar' }: LogoProps) => {
  const sizes = {
    navbar: {
      width: 80,
      height: 28,
      tailwind:
        'h-[22px] w-[64px] lg:h-[28px] lg:w-[80px] my-[13px] lg:my-[18px]',
    },
    footer: { width: 89, height: 32, tailwind: 'h-[32px] w-[89px]' },
  };

  const { width, height, tailwind } = sizes[placement];

  return (
    <Link href="/">
      <Image
        src={LogoWhiteDesktop}
        alt="logo"
        width={width}
        height={height}
        className={`hidden dark:block ${tailwind}`}
      />
      <Image
        src={LogoPinkDesktop}
        alt="logo"
        width={width}
        height={height}
        className={`dark:hidden ${tailwind}`}
      />
    </Link>
  );
};

export default Logo;
