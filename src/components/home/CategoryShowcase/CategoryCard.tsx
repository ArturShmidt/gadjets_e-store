import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import PhonesCatPhoto from '@public/img/category-phones.png';
import TabletsCatPhoto from '@public/img/category-tablets.png';
import AccessoriesCatPhoto from '@public/img/category-accessories.png';
import { CategoryWithCount } from '@/types/CategoryType';

const categoryAssets: Record<
  string,
  { img: StaticImageData; bgColor: string }
> = {
  phones: { img: PhonesCatPhoto, bgColor: '#6D6474' },
  tablets: { img: TabletsCatPhoto, bgColor: '#8d8d92' },
  accessories: { img: AccessoriesCatPhoto, bgColor: '#973d5f' },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

export default function CategoryCard({
  category,
}: {
  category: CategoryWithCount;
}) {
  const assets = categoryAssets[category.id] || {
    img: PhonesCatPhoto,
    bgColor: '#cccccc',
  };

  return (
    <motion.div
      className="flex flex-col cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
    >
      <Link
        href={`/${category.id}`}
        className="group"
      >
        <motion.div
          className="
                overflow-hidden rounded-lg relative 
                w-[288px] sm:w-[188px] md:w-[238px] lg:w-[328px] xl:w-[368px]
                h-[288px] sm:h-[188px] md:h-[238px] lg:h-[328px] xl:h-[368px]
                transition-shadow duration-700 
                hover:shadow-[0_6px_20px_0_rgba(23,32,49,0.6)]"
        >
          <div
            className="absolute inset-0 z-0"
            style={{ backgroundColor: assets.bgColor }}
          ></div>

          <motion.div
            className="absolute -bottom-18 -right-18 w-[300px] h-[300px] sm:w-[220px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px]"
            initial={{ x: 50, opacity: 0, scale: 0.8 }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
              transition: { duration: 0.6, ease: 'easeOut' },
            }}
            whileHover={{ scale: 1.2, transition: { duration: 0.8 } }}
          >
            <Image
              src={assets.img}
              alt={`${category.name} category image`}
              style={{ objectFit: 'cover', objectPosition: 'top left' }}
              fill
              className="z-10"
            />
          </motion.div>
        </motion.div>
        <h3 className="font-mont text-[20px] font-[500] leading-none tracking-tight pb-1 pt-4">
          {category.name}
        </h3>
        <p className="text-gray font-normal text-[14px] leading-[21px] tracking-normal">
          {category.count} models
        </p>
      </Link>
    </motion.div>
  );
}
