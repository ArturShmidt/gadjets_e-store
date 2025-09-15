'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '@/img/Logo.svg';
import LogoBlack from '@/img/Logo(Black).svg';
import Link from 'next/link';
import Hamburger from './Hamburger';
import Menu from './Menu';

const NavBar = () => {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (opened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [opened]);

  return (
    <div className="h-12 grid grid-cols-4 gap-4 px-4 border-b border-[#E2E6E9] dark:bg-dark-theme-bg">
      <Link href="/">
        {opened ?
          <Image
            src={LogoBlack}
            alt="logo"
            className="my-[13px]"
          />
        : <Image
            src={Logo}
            alt="logo"
            className="my-[13px]"
          />
        }
      </Link>

      {false && (
        <div className="">
          <Link href="/favorites">
            <span> icon_1</span>
          </Link>
          <Link href="/shoppingcart">
            <span>icon_2</span>
          </Link>
        </div>
      )}
      <div className="col-start-4 ml-7.5 border-l border-[#E2E6E9] h-full flex items-center content-center justify-end ">
        <Hamburger
          opened={opened}
          onOpened={setOpened}
        />
      </div>
      {opened && (
        <>
          <Menu onClose={() => setOpened(false)} />
        </>
      )}
    </div>
  );
};

export default NavBar;
