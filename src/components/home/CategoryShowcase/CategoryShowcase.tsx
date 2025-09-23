'use client';

// import { useGetCategoriesQuery } from '@/lib/features/api/apiSlice';
import React from 'react';
import CategoryCard from './CategoryCard';
import { motion } from 'framer-motion';
import { CategoryWithCount } from '@/types/CategoryType';

interface Props {
  categories: CategoryWithCount[];
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const CategoryShowcase: React.FC<Props> = ({ categories }) => {
  // TODO remove comments
  // console.log(categories);
  // const { data: categories, isLoading, isError } = useGetCategoriesQuery();

  // if (isLoading) {
  //   // Тут можна показати скелетон для трьох карток
  //   return <div>Loading Categories...</div>;
  // }

  // if (isError || !categories) {
  //   return null;
  // }

  return (
    <section className="text-light-theme-text dark:text-dark-theme-text px-4 sm:px-6 lg-max:px-8 pb-14 sm:pb-16 lg-max:pb-20 ">
      <motion.h2
        className="font-extrabold text-[22px] sm:text-[32px] sm:leading-[41px] leading-[1.4] sm:tracking-[-0.01em] tracking-normal pb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
      >
        Shop by category
      </motion.h2>
      <motion.div
        className="flex flex-col gap-8 sm:flex-row sm:gap-4 md:gap-6 lg:gap-4 justify-center items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default CategoryShowcase;
