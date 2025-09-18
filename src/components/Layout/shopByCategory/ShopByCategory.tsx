// #region Imports

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import PhonesCatPhoto from '@public/img/category-phones.png';
import TabletsCatPhoto from '@public/img/category-tablets.png';
import AccessoriesCatPhoto from '@public/img/category-accessories.png';

const categories = [
  {
    href: '/phones',
    img: PhonesCatPhoto,
    title: 'Mobile phones',
    count: 124,
    bgColor: '#6D6474',
  },
  {
    href: '/tablets',
    img: TabletsCatPhoto,
    title: 'Tablets',
    count: 36,
    bgColor: '#8d8d92',
  },
  {
    href: '/accessories',
    img: AccessoriesCatPhoto,
    title: 'Accessories',
    count: 34,
    bgColor: '#973d5f',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

const ShopByCategory = () => {
  return (
    <div className="text-light-theme-text dark:text-dark-theme-text px-4 sm:px-6 lg:px-8 pb-14 sm:pb-16 lg:pb-20 ">
      <motion.h2
        className="font-[Mont] font-extrabold text-[22px] sm:text-[32px] sm:leading-[41px] leading-[1.4] sm:tracking-[-0.01em] tracking-normal pb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
      >
        Shop by category
      </motion.h2>

      <motion.div
        className="flex flex-col gap-8 sm:flex-row sm:gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {categories.map((category, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
          >
            <Link
              href={category.href}
              className="group"
            >
              <motion.div className="overflow-hidden rounded-lg relative w-[288px] sm:w-[188px] lg:w-[368px] h-[288px] sm:h-[188px] lg:h-[368px] transition-shadow duration-700 hover:shadow-[0_6px_20px_0_rgba(23,32,49,0.6)]">
                <div
                  className="absolute inset-0 z-0"
                  style={{ backgroundColor: category.bgColor }}
                ></div>

                <motion.div
                  className="absolute -bottom-18 -right-18 w-[300px] h-[300px] sm:w-[220px] sm:h-[200px] lg:w-[350px] lg:h-[350px]"
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
                    src={category.img}
                    alt={`${category.title} category image`}
                    style={{ objectFit: 'cover', objectPosition: 'top left' }}
                    fill
                    className="z-10"
                  />
                </motion.div>
              </motion.div>
              <h3 className="font-mont text-[20px] font-[500] leading-none tracking-tight pb-1 pt-4">
                {category.title}
              </h3>
              <p className="text-gray font-normal text-[14px] leading-[21px] tracking-normal">
                {category.count} models
              </p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ShopByCategory;
