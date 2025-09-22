'use client';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import { motion, useAnimation, useInView, Variants } from 'framer-motion';
import Link from 'next/link';

type Slide = {
  text: string;
  subText: string;
  slogan: string;
  product: string;
  productSlogan?: string;
  image: string;
  itemId: string;
};

interface SlideProps {
  slide: Slide;
}

const SlideSecond: React.FC<SlideProps> = ({ slide }) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  const titleVariants: Variants = {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };
  const subTextVariants: Variants = {
    hidden: { opacity: 0, x: -12 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.12 } },
  };
  const sloganVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.22 } },
  };
  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.36 } },
  };
  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.94, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.44 },
    },
  };

  return (
    <div
      ref={ref}
      className="relative flex flex-col sm:flex-row h-[320px] sm:h-[220px] md:h-[280px] lg:h-[400px] rounded-2xl overflow-hidden bg-black"
    >
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center sm:items-baseline px-6 py-6 z-20 relative">
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate={controls}
          className="font-[Mont] font-extrabold text-3xl sm:text-2xl md:text-4xl lg:text-5xl text-white text-center sm:text-left"
        >
          {slide.text}
        </motion.h1>

        <motion.h2
          variants={subTextVariants}
          initial="hidden"
          animate={controls}
          className="font-[Mont] font-bold text-xl md:text-2xl lg:text-3xl text-gray-300 mt-2 text-center sm:text-left"
        >
          {slide.subText}
        </motion.h2>

        <motion.p
          variants={sloganVariants}
          initial="hidden"
          animate={controls}
          className="text-[#AEAEAE] opacity-80 mt-3 sm:text-[13px] md:text-[15px] lg:text-[17px] text-center sm:text-left max-w-[460px]"
        >
          {slide.slogan}
        </motion.p>
        <motion.a
          href={`/products/${slide.itemId}`}
          variants={buttonVariants}
          initial="hidden"
          animate={controls}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hover:cursor-pointer mt-4 sm:mt-6 px-6 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-carousel-title-first via-carousel-title-second to-carousel-title-third text-dark-theme-text font-[Mont] font-bold rounded-full text-sm md:text-base lg:text-lg shadow-lg mx-auto sm:mx-0 text-center block"
        >
          ORDER NOW
        </motion.a>
      </div>

      <div className="relative w-full sm:w-1/2 flex justify-center items-center mt-0 sm:mt-0 z-10 px-4">
        <Tilt
          tiltMaxAngleX={12}
          tiltMaxAngleY={12}
          perspective={1000}
          scale={1.05}
        >
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={controls}
            className="mt-[-10px] sm:mt-0"
          >
            <Image
              src={slide.image}
              alt={slide.product}
              width={574}
              height={341}
              className="w-[220px] sm:w-[200px] md:w-[250px] lg:w-[300px] object-cover rounded-xl"
            />
          </motion.div>
        </Tilt>
      </div>
    </div>
  );
};

export default SlideSecond;
