'use client';

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCart from '@/components/Products/ProductCart';

export default function ProductSlider() {
  useEffect(() => {
    // Swiper's navigation module is already loaded via `modules: [Navigation]`
  }, []);

  const nameOfCtegory = ['Brand new models'];

  const slides = [0, 1, 2, 3, 4, 5];

  return (
    <div className="w-full relative pb-14 sm:pb-16 lg:pb-20">
      <div className="flex flex-row justify-between pb-6 text-light-theme-text dark:text-dark-theme-text px-4 sm:px-6 lg:px-8 gap-10">
        <h2
          className="font-[Mont] font-extrabold text-[22px] sm:text-[32px]
       sm:leading-[41px] leading-[1.4] sm:tracking-[-0.01em] tracking-normal"
        >
          {nameOfCtegory}
        </h2>
        <div className="flex flex-row gap-4">
          <button
            className="custom-prev group p-2 flex justify-center items-center border border-light-theme-border-active
           dark:border-product-add-btn-selected dark:bg-product-add-btn-selected dark:hover:border-dark-theme-border-hover
            dark:hover:bg-dark-theme-border-hover w-8 h-8 rounded-full dark:rounded-none hover:border-light-theme-text transition"
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
            className="custom-next group p-2 flex justify-center items-center border border-light-theme-border-active
           dark:border-product-add-btn-selected dark:bg-product-add-btn-selected dark:hover:border-dark-theme-border-hover
            dark:hover:bg-dark-theme-border-hover w-8 h-8 rounded-full dark:rounded-none hover:border-light-theme-text transition"
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
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
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
          {slides.map((numb) => (
            <SwiperSlide key={numb}>
              <ProductCart />
              {/* <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
                <span className="text-2xl font-semibold text-indigo-600">
                  {text}
                </span>
              </div> */}
            </SwiperSlide>
          ))}

          {/* Navigation buttons */}
          <div className="absolute flex justify-center items-center left-0 right-0 bottom-12 z-10 gap-4"></div>
        </Swiper>
      </div>
    </div>
  );
}
