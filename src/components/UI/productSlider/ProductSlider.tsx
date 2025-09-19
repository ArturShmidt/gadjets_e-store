'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCart from '@/components/Products/ProductCart';
import { Product } from '@/types/product';

interface ProductSliderProps {
  title: string;
  products: Product[];
}

export default function ProductSlider({ title, products }: ProductSliderProps) {
  // Використовуємо useRef для кнопок
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div className="w-full relative pb-10 sm:pb-12 lg:pb-16">
      <div className="flex flex-row justify-between pb-4 text-light-theme-text dark:text-dark-theme-text px-4 sm:px-6 lg:px-8 gap-10">
        <motion.h2
          className="font-extrabold text-[22px] sm:text-[32px] sm:leading-[41px] leading-[1.4] sm:tracking-[-0.01em] tracking-normal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }}
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
          {products.map((product, idx) => (
            <SwiperSlide
              key={product.id}
              className="py-4"
            >
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
