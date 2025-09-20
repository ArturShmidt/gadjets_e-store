'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView, Variants } from 'framer-motion';

const floatingPanel: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1, type: 'spring', stiffness: 90 },
  },
};

const watchVariants: Variants = {
  hidden: { opacity: 0, scale: 0.84, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1, type: 'spring', stiffness: 100 },
  },
};

const bgVariants: Variants = {
  animate: {
    rotate: [0, 360],
    scale: [1, 1.05, 1],
    transition: { duration: 30, repeat: Infinity, ease: 'linear' },
  },
};

interface SlideProps {
  slide: { product: string; productSlogan: string; image: string };
}

const SlideThird: React.FC<SlideProps> = ({ slide }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-50px' });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  const allBlocks = [
    {
      text: 'Fast',
      color: 'from-purple-500 to-pink-500',
      textColor: 'text-white',
    },
    {
      text: 'Smart',
      color: 'from-yellow-400 to-orange-400',
      textColor: 'text-black',
    },
    {
      text: 'Active',
      color: 'from-green-400 to-blue-400',
      textColor: 'text-white',
    },
    {
      text: 'Connect',
      color: 'from-pink-400 to-purple-500',
      textColor: 'text-white',
    },
    {
      text: 'Pulse',
      color: 'from-yellow-300 to-red-400',
      textColor: 'text-black',
    },
    {
      text: 'Health',
      color: 'from-blue-400 to-cyan-400',
      textColor: 'text-white',
    },
    {
      text: 'Tech',
      color: 'from-purple-400 to-pink-400',
      textColor: 'text-white',
    },
    {
      text: 'Style',
      color: 'from-orange-400 to-yellow-400',
      textColor: 'text-black',
    },
  ];

  return (
    <div
      ref={ref}
      className="relative flex flex-col sm:flex-row h-[320px] sm:h-[189px] md:h-[240px] lg:h-[400px] rounded-2xl overflow-hidden bg-black"
    >
      {/* Фон */}
      <motion.div
        className="absolute w-[250px] h-[250px] bg-gradient-to-r from-purple-500 via-transparent to-pink-500 rounded-full opacity-30 top-10 left-10 blur-3xl"
        variants={bgVariants}
        animate="animate"
      />
      <motion.div
        className="absolute w-[200px] h-[200px] bg-gradient-to-r from-yellow-400 via-transparent to-orange-400 rounded-full opacity-20 bottom-10 right-20 blur-2xl"
        variants={bgVariants}
        animate="animate"
      />

      {/* Мобілки */}
      <div className="flex flex-col sm:hidden w-full justify-center items-center p-4 z-10 relative">
        <motion.h2
          className="font-[Mont] font-extrabold text-2xl md:text-3xl text-white text-center z-20"
          initial="hidden"
          animate={controls}
          variants={floatingPanel}
        >
          {slide.product}
        </motion.h2>
        <motion.p
          className="text-[#AEAEAE] opacity-80 text-center mt-2 sm:text-[12px] md:text-[16px] z-20"
          initial="hidden"
          animate={controls}
          variants={floatingPanel}
        >
          {slide.productSlogan}
        </motion.p>
        <motion.div
          className="mt-4 w-[140px] h-[140px] -translate-y-[5%] z-10"
          initial="hidden"
          animate={controls}
          variants={watchVariants}
        >
          <Image
            src={slide.image}
            alt={slide.product}
            width={140}
            height={140}
            className="rounded-xl shadow-lg"
          />
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-5 py-3 bg-gradient-to-r from-carousel-title-first via-carousel-title-second to-carousel-title-third text-dark-theme-text
            font-[Mont] font-bold rounded-full text-sm shadow-lg z-30"
          initial="hidden"
          animate={controls}
          variants={floatingPanel}
        >
          BUY APPLE WATCH
        </motion.button>
      </div>

      {/* Планшети та ПК */}
      <div className="hidden sm:flex w-full h-full relative">
        {/* Ліва колонка - блоки */}
        <div className="w-1/2 relative flex flex-col justify-center items-center">
          {allBlocks.map((block, idx) => (
            <motion.div
              key={idx}
              className={`absolute w-32 h-20 sm:w-20 sm:h-12 md:w-24 md:h-16 lg:w-32 lg:h-20
                bg-gradient-to-r ${block.color} rounded-2xl flex justify-center items-center
                ${block.textColor} font-[Mont] font-bold shadow-lg`}
              style={{
                top: `${3 + idx * 10}%`, // збільшуємо відстань між блоками
                left: `${3 + idx * 8}%`,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: [0, 5, 0],
                transition: {
                  duration: 4 + idx,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  ease: 'easeInOut',
                },
              }}
            >
              {block.text}
            </motion.div>
          ))}
        </div>

        {/* Права колонка - картинка */}
        <div className="w-1/2 relative flex justify-end items-center">
          <motion.div
            className="h-[130%] sm:-translate-x-[5%] sm:-translate-y-[-5%]"
            initial="hidden"
            animate={controls}
            variants={watchVariants}
          >
            <Image
              src={slide.image}
              alt={slide.product}
              width={400}
              height={400}
              className="rounded-xl shadow-2xl object-contain w-full h-full"
            />
          </motion.div>
        </div>

        {/* Кнопка між блоками та картинкою */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute left-[48%] bottom-[60%] sm:left-[38%] sm:bottom-[55%] md:bottom-[55%] md:left-[40%]  lg:left-[40%] lg:bottom-[55%]
            sm:px-4 sm:py-2 md:px-10 md:py-3 lg:px-14 lg:py-5 lg:text-[18px]
            bg-gradient-to-r from-carousel-title-first via-carousel-title-second to-carousel-title-third text-dark-theme-text font-[Mont] font-bold
            rounded-full text-sm shadow-lg z-30 hover:cursor-pointer"
          initial="hidden"
          animate={controls}
          variants={floatingPanel}
        >
          BUY APPLE WATCH
        </motion.button>
      </div>
    </div>
  );
};

export default SlideThird;
