'use client';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { slides } from './slidesData';
import SlideFirst from './SlideFirst';
import SlideSecond from './SlideSecond';
import SlideThird from './SlideThird';

const buttonClass = `
  hidden sm:flex items-center justify-center
  w-[32px] h-[220px] md:h-[280px] lg:h-[400px]
  bg-white text-black border border-light-theme-border-active rounded-2xl
  hover:cursor-pointer hover:border-light-theme-text
  dark:bg-dark-theme-btn-selected dark:bg-opacity-50 dark:text-dark-theme-text dark:border-dark-theme-border-color
  dark:hover:bg-dark-theme-border-hover
  transition-colors
  flex-shrink-0
  mx-6
`;

const Carousel = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="w-full pb-24">
      <div className="dark:bg-dark-theme-bg px-6 py-6 sm:px-8 sm:py-12">
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-black dark:text-white text-center">
          Welcome to Nice Gadgets store!
        </h1>
      </div>

      <div className="w-full mx-auto flex flex-col items-center">
        <div className="w-full flex items-center justify-center">
          <button
            aria-label="Previous Slide"
            ref={prevRef}
            className={`${buttonClass} main-carousel-prev`}
          >
            &#10094;
          </button>

          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            pagination={{ clickable: true, el: '.carousel-pagination' }}
            loop
            slidesPerView={1}
            navigation={{
              prevEl: '.main-carousel-prev',
              nextEl: '.main-carousel-next',
            }}
            autoplay={{ delay: 7000, disableOnInteraction: true }}
            className="flex-1 w-full"
          >
            <SwiperSlide>
              <SlideFirst slide={slides[0]} />
            </SwiperSlide>
            <SwiperSlide>
              <SlideSecond slide={slides[1]} />
            </SwiperSlide>
            <SwiperSlide>
              <SlideThird slide={slides[2]} />
            </SwiperSlide>
          </Swiper>

          <button
            aria-label="Next Slide"
            ref={nextRef}
            className={`${buttonClass} main-carousel-next`}
          >
            &#10095;
          </button>
        </div>

        <div className="carousel-pagination mt-6 flex justify-center"></div>
      </div>
    </div>
  );
};

export default Carousel;
