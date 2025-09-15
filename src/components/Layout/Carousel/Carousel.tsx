'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    text: 'Now available',
    subText: 'in our store!',
    slogan: 'Be the first!',
    product: 'iPhone 14 Pro',
    productSlogan: 'Pro. Beyond.',
    image: '/img/Carousel/img1.png',
  },
  {
    text: 'Now available',
    subText: 'in our store!',
    slogan: 'Be the first!',
    product: 'iPhone 15 Pro',
    productSlogan: 'Pro. Beyond.',
    image: '/img/Carousel/img1.png',
  },
  {
    text: 'Now available',
    subText: 'in our store!',
    slogan: 'Be the first!',
    product: 'iPhone 16 Pro',
    productSlogan: 'Pro. Beyond.',
    image: '/img/Carousel/img1.png',
  },
];

const Carousel = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <div className="w-full">
      {/* Заголовок */}
      <div className="dark:bg-dark-theme-bg px-6 py-6 sm:px-8 sm:py-12">
        <h1 className="font-[Mont] font-[800] text-3xl text-[#F1F2F9] tracking-[-0.01em] sm:text-5xl">
          Welcome to Nice Gadgets store!
        </h1>
      </div>

      {/* Swiper з кнопками */}
      <div
        className="w-full dark:bg-dark-theme-bg flex items-start justify-center
                  "
      >
        {/* Кнопка назад */}
        <button
          ref={prevRef}
          className="hidden bg-[#323542] bg-opacity-50 text-[#F1F2F9] items-center justify-center
                    sm:flex sm:w-[32px] sm:mx-[24px] sm:h-[189px]
                    md:h-[240px]
                    lg:h-[400px]"
        >
          &#10094;
        </button>

        {/* Swiper */}
        {swiperReady && (
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            loop
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current!,
              nextEl: nextRef.current!,
            }}
            onBeforeInit={(swiper) => {
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== 'boolean'
              ) {
                const navigation = swiper.params.navigation;
                navigation.prevEl = prevRef.current!;
                navigation.nextEl = nextRef.current!;
              }
            }}
            className="w-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="bg-black flex flex-col sm:flex-row h-[320px] sm:h-[189px] md:h-[240px] lg:h-[400px]">
                  {/* Ліва частина: текст */}
                  <div className="w-full flex flex-col">
                    <div
                      className="sm:bg-[#222222] rounded-2xl flex flex-col justify-center
                                  h-full w-full
                                  sm:m-2 sm:p-4"
                    >
                      <p
                        className="font-[Mont] text-center font-extrabold text-2xl leading-[106%] bg-clip-text text-transparent 
                                  bg-gradient-to-r from-[#891CE8] via-[#7560FA] to-[#E963FF]
                                  pt-6 sm:pt-0 sm:text-left"
                      >
                        {slide.text}
                      </p>
                      <p
                        className="font-[Mont] text-center font-extrabold text-2xl leading-[106%] bg-clip-text text-transparent 
                                  bg-gradient-to-r from-[#891CE8] via-[#7560FA] to-[#E963FF]
                                  sm:text-left"
                      >
                        {slide.subText}
                      </p>

                      <div className="hidden sm:block">
                        <p className="opacity-80 text-[#AEAEAE] sm:text-[12px] sm:pt-[10px]">
                          {slide.slogan}
                        </p>
                        <button
                          className="font-[Mont] border border-gray-500 text-[10px] text-white 
                                          rounded-full hover:cursor-pointer sm:mt-6 sm:px-4 sm:py-2"
                        >
                          ORDER NOW
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Права частина: продукт */}
                  <div className="w-full flex flex-col justify-center items-center h-full pt-6">
                    {/* Назва та слоган */}
                    <div className="text-center">
                      <h2
                        className="font-[SF Pro Display] font-[590] text-white text-3xl
                                        sm:text-[18px]"
                      >
                        {slide.product}
                      </h2>
                      <p
                        className="font-[SF Pro Display] font-[400] text-[#9B9B9B] text-xs
                                        pt-2 sm:pt-0 sm:text-[8px]"
                      >
                        {slide.productSlogan}
                      </p>
                    </div>

                    {/* Картинка */}
                    <div className="flex-1 flex flex-col justify-end items-center">
                      <Image
                        src={slide.image}
                        alt={slide.product}
                        width={574}
                        height={341}
                        className="w-[230px] sm:w-[200px] lg:w-[368px]"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Кнопка вперед */}
        <button
          ref={nextRef}
          className="hidden bg-[#323542] bg-opacity-50 text-[#F1F2F9] items-center justify-center
                    sm:flex sm:w-[32px] sm:mx-[24px] sm:h-[189px]
                    md:h-[240px]
                    lg:h-[400px]"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
