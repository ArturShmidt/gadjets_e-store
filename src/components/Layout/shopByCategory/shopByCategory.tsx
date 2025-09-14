import Image from 'next/image';
import Link from 'next/link';
import PhonesCatPhoto from '@public/img/phones-cat-photo.png';
import TabletsCatPhoto from '@public/img/tablets-cat-photo.png';
import AccessoriesCatPhoto from '@public/img/accessories-cat-photo.png';

const ShopByCategory = () => {
  return (
    <div>
      <h2
        className="font-[Mont] font-extrabold text-[22px] sm:text-[32px]
       sm:leading-[41px] leading-[1.4] sm:tracking-[-0.01em] tracking-normal pb-6"
      >
        Shop by category
      </h2>
      <div className="flex flex-col gap-8 sm:flex-row sm:gap-4 aspect-square">
        <Link href="/phones">
          <Image
            className="pb-6"
            src={PhonesCatPhoto}
            sizes="(max-width: 639px) 288px, (max-width: 1199px) 187px, 368px"
            alt="Phones category image"
          />
          <h3 className="text-light font-mont text-[20px] font-[500] leading-none tracking-tight pb-1">
            Mobile phones
          </h3>
          <p className="text-gray font-normal text-[14px] leading-[21px] tracking-normal">
            95 models
          </p>
        </Link>
        <Link href="/tablets">
          <Image
            className="pb-6"
            src={TabletsCatPhoto}
            sizes="(max-width: 639px) 288px, (max-width: 1199px) 187px, 368px"
            alt="Tablets category image"
          />
          <h3 className="text-light font-mont text-[20px] font-[500] leading-none tracking-tight pb-1">
            Tablets
          </h3>
          <p className="text-gray font-normal text-[14px] leading-[21px] tracking-normal">
            24 models
          </p>
        </Link>
        <Link href="/accessories">
          <Image
            className="pb-6"
            src={AccessoriesCatPhoto}
            sizes="(max-width: 639px) 288px, (max-width: 1199px) 187px, 368px"
            alt="Accessories category image"
          />
          <h3 className="text-light font-mont text-[20px] font-[5gitg00] leading-none tracking-tight pb-1">
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
