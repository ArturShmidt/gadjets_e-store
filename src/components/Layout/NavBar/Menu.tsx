import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Cart from '@/img/Cart.svg';
import Favorites from '@/img/Favorites.svg';

type Props = {
  onClose: () => void;
};

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/phones', label: 'Phones' },
  { href: '/tablets', label: 'Tablets' },
  { href: '/accessories', label: 'Accessories' },
];

const Menu: React.FC<Props> = ({ onClose }) => {
  return (
    <>
      <div className="fixed inset-0 top-12 bg-white text-[#89939A] flex justify-between flex-col">
        <ul className=" flex flex-col items-center pt-12 gap-4 font-extrabold text-[12px] uppercase z-50">
          {menuItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={onClose}
                className="
              relative text-[#89939A] tracking-4percent
              hover:text-black 
              transition-colors duration-200
              after:absolute after:left-0 after:right-0 after:h-[2px] after:bg-black after:bottom-[-8px] 
              after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200
            "
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-center items-center h-16">
          <Link
            href="/favorites"
            className="w-40 h-16 border-r border-t border-[#E2E6E9] flex justify-center relative
               after:absolute after:left-0 after:right-0 after:h-[2px] after:bg-black after:bottom-0
               after:scale-x-0 hover:after:scale-x-100 after:origin-bottom after:transition-transform after:duration-200"
          >
            <Image
              src={Favorites}
              alt="favorites"
            />
          </Link>
          <Link
            href="/shoppingcart"
            className="w-40 h-16 border-t border-[#E2E6E9] flex justify-center relative
               after:absolute after:left-0 after:right-0 after:h-[2px] after:bg-black after:bottom-0
               after:scale-x-0 hover:after:scale-x-100 after:origin-bottom after:transition-transform after:duration-200"
          >
            <Image
              src={Cart}
              alt="cart"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
