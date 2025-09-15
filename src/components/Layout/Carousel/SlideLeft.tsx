import React from 'react';

interface SlideProps {
  slide: {
    text: string;
    subText: string;
    slogan: string;
  };
}

const leftPanelClass = `
  sm:bg-[#222222] rounded-2xl flex flex-col
  justify-center h-full w-full
  sm:m-2 sm:p-4
  lg:m-4 lg:p-8 lg:justify-normal
`;

const headingGradientFirst = `
  font-[Mont] text-center font-extrabold
  text-2xl leading-[106%] bg-clip-text text-transparent
  bg-gradient-to-r from-[#891CE8] via-[#7560FA] to-[#E963FF]
  pt-6 sm:pt-0 sm:text-left md:text-3xl lg:text-5xl
`;

const headingGradientSecond = `
  font-[Mont] text-center font-extrabold
  text-2xl leading-[106%] bg-clip-text text-transparent
  bg-gradient-to-r from-[#891CE8] via-[#7560FA] to-[#E963FF]
  sm:text-left md:text-3xl lg:text-5xl
`;

const sloganClass = `
  opacity-80 text-[#AEAEAE] sm:text-[12px] sm:pt-[10px] md:text-[16px]
`;

const orderButtonClass = `
  font-[Mont] border border-gray-500 text-[10px] text-white
  rounded-full hover:cursor-pointer
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
