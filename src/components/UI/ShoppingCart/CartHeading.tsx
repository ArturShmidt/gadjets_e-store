'use client';

import { useRouter } from 'next/navigation';
import ArrowLeftComponent from '@/components/UI/ShoppingCart/ArrowLeftComponent';
import Link from 'next/link';

const CartHeading: React.FC = () => {
  const router = useRouter();

  const handleBack = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    await fetch('/api/log-back');
    router.back();
  };

  return (
    <nav
      className="mt-6 sm:mt-10 
    px-4 sm:px-6 lg-max:px-8
    mx-auto
    max-w-[320px] sm:max-w-[640px] lg-max:max-w-[1200px]"
    >
      <Link
        href="/"
        onClick={handleBack}
        className="flex mb-6 sm:mb-4  w-13 cursor-pointer"
      >
        <div className="mr-1 text-light-theme-text dark:text-dark-theme-text">
          <ArrowLeftComponent />
        </div>
        <span className="text-light-theme-text-menu dark:text-dark-theme-text font-bold text-[12px]">
          Back
        </span>
      </Link>

      <h2 className="font-[800] text-[32px] sm:text-[48px] leading-[41px] sm:leading-[56px] text-light-theme-text dark:text-dark-theme-text">
        Cart
      </h2>
    </nav>
  );
};
export default CartHeading;
