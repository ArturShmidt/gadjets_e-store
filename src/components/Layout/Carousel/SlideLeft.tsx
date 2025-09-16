import React from 'react';

interface SlideProps {
  slide: {
    text: string;
    subText: string;
    slogan: string;
  };
}

const leftPanelClass = `
  flex flex-col justify-center h-full w-full
  rounded-2xl
  sm:bg-carousel-title-bg sm:m-2 sm:p-4
  lg:m-4 lg:p-8 lg:justify-normal
`;

const headingGradientFirst = `
  font-[Mont] font-extrabold text-2xl leading-[106%]
  text-center sm:text-left
  bg-clip-text text-transparent
  bg-gradient-to-r from-carousel-title-first via-carousel-title-second to-carousel-title-third
  pt-6 sm:pt-0
  md:text-3xl
  lg:text-5xl
`;

const headingGradientSecond = `
  font-[Mont] font-extrabold text-2xl leading-[106%]
  text-center sm:text-left
  bg-clip-text text-transparent
  bg-gradient-to-r from-carousel-title-first via-carousel-title-second to-carousel-title-third
  md:text-3xl
  lg:text-5xl
`;

const sloganClass = `
  text-[#AEAEAE] opacity-80
  sm:text-[12px] sm:pt-[10px]
  md:text-[16px]
`;

const orderButtonClass = `
  font-[Mont] text-white text-[10px]
  border border-gray-500 rounded-full
  hover:cursor-pointer hover:bg-dark-theme-border-color hover:border-dark-theme-btn-hover
  sm:mt-6 sm:px-4 sm:py-2
  md:mt-8 md:px-6 md:py-3
  lg:mt-20 lg:px-14 lg:py-5 lg:text-[18px]
`;

const SlideLeft: React.FC<SlideProps> = ({ slide }) => (
  <div className="w-full flex flex-col">
    <div className={leftPanelClass}>
      <p className={headingGradientFirst}>{slide.text}</p>
      <p className={headingGradientSecond}>
        {slide.subText}
        <span className="hidden sm:inline text-yellow-500">👌</span>
      </p>

      <div className="hidden sm:block">
        <p className={sloganClass}>{slide.slogan}</p>
        <button className={orderButtonClass}>ORDER NOW</button>
      </div>
    </div>
  </div>
);

export default SlideLeft;
