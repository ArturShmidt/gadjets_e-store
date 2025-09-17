// #region Imports

import Image from 'next/image';
import Link from 'next/link';
import PhonesCatPhoto from '@public/img/phones-cat-photo.png';
import TabletsCatPhoto from '@public/img/tablets-cat-photo.png';
import AccessoriesCatPhoto from '@public/img/accessories-cat-photo.png';
import { CategoryName } from '@/types/CategoryName';

// #endregion

const ShopByCategory = () => {
  return (
    <div className="text-light-theme-text dark:text-dark-theme-text px-4 sm:px-6 lg:px-8 pb-14 sm:pb-16 lg:pb-20">
      <h2
        className="font-[Mont] font-extrabold text-[22px] sm:text-[32px]
        sm:leading-[41px] leading-[1.4] sm:tracking-[-0.01em] tracking-normal pb-6"
      >
        Shop by category
      </h2>
      <div className="flex flex-col gap-8 sm:flex-row sm:gap-4">
        <Link href={`${CategoryName.Phones}`}>
          <Image
            className="pb-6"
            src={PhonesCatPhoto}
            sizes="(max-width: 639px) 288px, (max-width: 1199px) 187px, 368px"
            alt="Phones category image"
          />
          <h3 className="font-mont text-[20px] font-[500] leading-none tracking-tight pb-1 ">
            Mobile phones
          </h3>
          <p className="text-gray font-normal text-[14px] leading-[21px] tracking-normal">
            95 models
          </p>
        </Link>
        <Link href={`${CategoryName.Tablets}`}>
          <Image
            className="pb-6"
            src={TabletsCatPhoto}
            sizes="(max-width: 639px) 288px, (max-width: 1199px) 187px, 368px"
            alt="Tablets category image"
          />
          <h3 className="font-mont text-[20px] font-[500] leading-none tracking-tight pb-1">
            Tablets
          </h3>
          <p className="text-gray font-normal text-[14px] leading-[21px] tracking-normal">
            24 models
          </p>
        </Link>
        <Link href={`${CategoryName.Accessories}`}>
          <Image
            className="pb-6"
            src={AccessoriesCatPhoto}
            sizes="(max-width: 639px) 288px, (max-width: 1199px) 187px, 368px"
            alt="Accessories category image"
          />
          <h3 className="font-mont text-[20px] font-[500] leading-none tracking-tight pb-1">
            Accessories
          </h3>
          <p className="text-gray font-normal text-[14px] leading-[21px] tracking-normal">
            100 models
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ShopByCategory;
