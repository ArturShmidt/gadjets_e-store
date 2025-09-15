'use client';

import { useRef } from 'react';
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

  return (
    <>
      <header className="">
        {/*Welcome to our store! */}

        <div className="dark:bg-dark-theme-bg px-6 py-6 md:px-8md:py-12 lg:px-12 lg:py-16">
          <h1 className="font-[Mont] font-[800] text-3xl text-[#F1F2F9] leading-[41px] tracking-[-0.01em] md:text-[48px] lg:text-[56px]">
            Welcome to Nice Gadgets store!
          </h1>
        </div>
      </header>

      <section className="w-full relative">
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          loop
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
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
              {/* Основний контейнер */}
              <div className="w-full md:aspect-[3/1] bg-black flex flex-col md:flex-row relative overflow-hidden">
                {/* Заголовок */}
                <div className="w-full md:w-1/2 flex flex-col justify-start items-center md:items-start p-4 md:p-12 text-center md:text-left">
                  <div className="md:bg-[#222222] rounded-2xl md:p-4 md:pl-8 md:pr-28 md:pt-4 md:pb-4 w-full">
                    <p className="font-[Mont] font-extrabold text-2xl leading-[106%] bg-clip-text text-transparent bg-gradient-to-r from-[#891CE8] via-[#7560FA] to-[#E963FF] mt-4">
                      {slide.text}
                    </p>
                    <p className="font-[Mont] font-extrabold text-2xl leading-[106%] bg-clip-text text-transparent bg-gradient-to-r from-[#891CE8] via-[#7560FA] to-[#E963FF]">
                      {slide.subText}
                    </p>
                    <div className="hidden sm:block">
                      <p className="opacity-80 text-[#AEAEAE] pt-4">
                        {slide.slogan}
                      </p>
                      <button className="font-[Mont] mt-12 px-6 py-3 border border-gray-500 text-white rounded-full hover:cursor-pointer">
                        ORDER NOW
                      </button>
                    </div>
                  </div>
                </div>

                {/* Товар */}
                <div className="w-full md:w-1/2 flex flex-col justify-start items-center md:p-12">
                  {/* Назва */}
                  <div className="mb-4 flex flex-col items-center text-center w-full">
                    <h2 className="font-['SF Pro Display'] font-[590] text-white text-2xl">
                      {slide.product}
                    </h2>
                    <p className="font-['SF Pro Display'] font-[400] text-[#9B9B9B] text-xs">
                      {slide.productSlogan}
                    </p>
                  </div>

                  {/* Картинка */}
                  <div className="flex-1 flex items-end justify-center w-full">
                    <Image
                      src={slide.image}
                      alt={slide.product}
                      width={350}
                      height={350}
                      className="w-54 md:w-64 lg:w-80 object-contain"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Кнопка назад (від центру слайду назовні) */}
        <button
          ref={prevRef}
          className="hidden md:flex absolute top-0 left-0 -translate-x-6 h-full w-12 md:w-16 bg-[#323542] bg-opacity-50 text-white items-center justify-center z-10"
        >
          &#10094;
        </button>

        {/* Кнопка вперед (від центру слайду назовні) */}
        <button
          ref={nextRef}
          className="hidden md:flex absolute top-0 right-0 translate-x-6 h-full w-12 md:w-16 bg-[#323542] bg-opacity-50 text-white items-center justify-center z-10"
        >
          &#10095;
        </button>
      </section>
    </>
  );
};

export default Carousel;
