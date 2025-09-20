import { CategoryName } from '@/types/CategoryName';
import Link from 'next/link';
import React from 'react';
type Props = {
  name: string;
};
const ActionButton: React.FC<Props> = ({ name }) => {
  return (
    <div
      className="h-10 w-40 flex justify-center items-center
            bg-light-theme-btn-product-bg text-white
            dark:bg-product-add-btn dark:text-text-light
            text-sm leading-[21px]
            rounded-[8px]
            transition-transform duration-500
            hover:shadow-[0_0_13px_0_rgba(23,32,49,0.4)]
            hover:cursor-pointer
            dark:hover:bg-dark-theme-btn-hover
            hover:scale-110
"
    >
      <Link href={`/${CategoryName.Phones}`}>{name}</Link>
    </div>
  );
};

export default ActionButton;
