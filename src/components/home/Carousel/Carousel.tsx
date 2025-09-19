'use client';
// #region Imports

import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { slides } from './slidesData';
import SlideLeft from './SlideLeft';
import SlideRight from './SlideRight';

import { motion } from 'framer-motion';
// #endregion

const buttonClass = `
  hidden sm:flex items-center justify-center
  sm:w-[32px] sm:mx-[24px] sm:h-[189px] md:h-[240px] lg:h-[400px]
  bg-white text-black border border-light-theme-border-active rounded-2xl
  hover:cursor-pointer hover:border-light-theme-text
  dark:bg-dark-theme-btn-selected dark:bg-opacity-50 dark:text-dark-theme-text dark:border-dark-theme-border-color
  dark:hover:bg-dark-theme-border-hover
`;
const Carousel = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => setSwiperReady(true), []);

  return (
    <div className="w-full">
      <motion.div
        className="dark:bg-dark-theme-bg px-6 py-6 sm:px-8 sm:py-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1
          className="font-[Mont] font-extrabold 
           text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
           tracking-tight 
           text-black dark:text-white
           text-center"
        >
          Welcome to Nice Gadgets store!
        </h1>
      </motion.div>

      <motion.div
        className="w-full dark:bg-dark-theme-bg flex flex-col items-center pb-[88px] sm:pb-[96px] lg:pb-[112px]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="flex items-start justify-center w-full">
          <button
            ref={prevRef}
            className={buttonClass}
          >
            &#10094;
          </button>

          {swiperReady && (
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              pagination={{ clickable: true, el: '.custom-pagination' }}
              loop
              slidesPerView={1}
              navigation={{
                prevEl: prevRef.current!,
                nextEl: nextRef.current!,
              }}
              autoplay={{ delay: 7000, disableOnInteraction: true }}
              onBeforeInit={(swiper) => {
                if (
                  swiper.params.navigation &&
                  typeof swiper.params.navigation !== 'boolean'
                ) {
                  swiper.params.navigation.prevEl = prevRef.current!;
                  swiper.params.navigation.nextEl = nextRef.current!;
                }
              }}
              className="w-full"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="bg-black flex flex-col sm:flex-row 
                                h-[320px] sm:h-[189px] md:h-[240px] lg:h-[400px]
                                rounded-2xl active:cursor-grabbing"
                  >
                    <SlideLeft slide={slide} />
                    <SlideRight slide={slide} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <button
            ref={nextRef}
            className={buttonClass}
          >
            &#10095;
          </button>
        </div>

        <div className="custom-pagination mt-6 flex justify-center"></div>
      </motion.div>
    </div>
  );
};

export default Carousel;
