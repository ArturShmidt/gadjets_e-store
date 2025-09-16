'use client';

import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { slides } from './slidesData';
import SlideLeft from './SlideLeft';
import SlideRight from './SlideRight';

const buttonClass = `
  hidden sm:flex
  items-center justify-center

  sm:w-[32px] sm:mx-[24px] sm:h-[189px]
  md:h-[240px] lg:h-[400px]

  bg-white text-black border border-[#B4BDC3] rounded-2xl
  hover:cursor-pointer hover:border-[#0F0F11]

  dark:bg-[#323542] dark:bg-opacity-50 dark:text-[#F1F2F9] dark:border-none dark:rounded-none
  dark:hover:bg-[#4A4D58]
`;
const Carousel = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => setSwiperReady(true), []);

  return (
    <div className="w-full">
      {/* Заголовок */}
      <div className="dark:bg-dark-theme-bg px-6 py-6 sm:px-8 sm:py-12">
        <h1
          className=" font-[Mont] font-[800] 
                        text-3xl sm:text-5xl 
                        tracking-[-0.01em] 
                        text-black dark:text-[#F1F2F9]"
        >
          Welcome to Nice Gadgets store!
        </h1>
      </div>

      {/* Swiper */}
      <div className="w-full dark:bg-dark-theme-bg flex items-start justify-center">
        <button
          ref={prevRef}
          className={`${buttonClass}`}
        >
          &#10094;
        </button>

        {swiperReady && (
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            loop
            slidesPerView={1}
            navigation={{ prevEl: prevRef.current!, nextEl: nextRef.current! }}
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
                                rounded-2xl dark:rounded-none"
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
          className={`${buttonClass}`}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
