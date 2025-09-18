'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCart from '@/components/Products/ProductCart';
import products from '@public/api/products.json';

interface ProductSliderProps {
  title: string;
}

export default function ProductSlider({ title }: ProductSliderProps) {
  // Використовуємо useRef для кнопок
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const visiblePhones = products.filter(
    (product) => product.year === Math.max(...products.map((p) => p.year)),
  );

  const getTopDiscounts = (category: string, count: number) => {
    return products
      .filter((p) => p.category === category)
      .sort((a, b) => b.fullPrice - b.price - (a.fullPrice - a.price))
      .slice(0, count);
  };

  const visibleHot = [
    ...getTopDiscounts('phones', 4),
    ...getTopDiscounts('tablets', 3),
    ...getTopDiscounts('accessories', 3),
  ];

  const visibleProducts =
    title === 'Brand new models' ? visiblePhones
    : title === 'Hot prices' ? visibleHot
    : [];

  return (
    <div className="w-full relative pb-14 sm:pb-16 lg:pb-20">
      <div className="flex flex-row justify-between pb-6 text-light-theme-text dark:text-dark-theme-text px-4 sm:px-6 lg:px-8 gap-10">
        <motion.h2
          className="font-[Mont] font-extrabold text-[22px] sm:text-[32px] sm:leading-[41px] leading-[1.4] sm:tracking-[-0.01em] tracking-normal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
        >
          {title}
        </motion.h2>
        <div className="flex flex-row gap-4">
          <button
            ref={prevRef}
            className="group p-2 flex justify-center items-center border border-light-theme-border-active
           dark:border-product-add-btn-selected dark:bg-product-add-btn-selected dark:hover:border-dark-theme-border-hover
            dark:hover:bg-dark-theme-border-hover w-8 h-8 rounded-full hover:border-light-theme-text transition"
          >
            <svg
              className="h-5 w-5 text-light-theme-text dark:text-dark-theme-text"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M10.0002 11.9999L6 7.99971L10.0025 3.99719"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            ref={nextRef}
            className="group p-2 flex justify-center items-center border border-light-theme-border-active
           dark:border-product-add-btn-selected dark:bg-product-add-btn-selected dark:hover:border-dark-theme-border-hover
            dark:hover:bg-dark-theme-border-hover w-8 h-8 rounded-full hover:border-light-theme-text transition"
          >
            <svg
              className="h-5 w-5 text-light-theme-text dark:text-dark-theme-text"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.99984 4.00012L10 8.00029L5.99748 12.0028"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="pl-4 sm:pl-6 lg:px-8">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          loop={true}
          navigation={{
            nextEl: nextRef.current,
            prevEl: prevRef.current,
          }}
          onInit={(swiper) => {
            // @ts-expect-error: Swiper types don't know about refs
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-expect-error: Swiper types don't know about refs
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            0: { slidesPerView: 1.4 },
            500: { slidesPerView: 2.3 },
            640: { slidesPerView: 2.5 },
            900: { slidesPerView: 3.5 },
            1200: { slidesPerView: 4 },
          }}
          className="multiple-slide-carousel"
        >
          {visibleProducts.map((product, idx) => (
            <SwiperSlide key={product.id}>
              <ProductCart
                product={product}
                index={idx}
              />
            </SwiperSlide>
          ))}

          {/* Navigation buttons */}
          <div className="absolute flex justify-center items-center left-0 right-0 bottom-12 z-10 gap-4"></div>
        </Swiper>
      </div>
    </div>
  );
}
