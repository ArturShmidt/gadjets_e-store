'use client';
import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface SlideProps {
  slide: {
    product: string;
    productSlogan: string;
    itemId: string;
    image: string;
  };
}

const SlideFirst: React.FC<SlideProps> = ({ slide }) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true });
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  const subTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };
  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, delay: 0.5 },
    },
  };

  return (
    <div
      ref={ref}
      className="relative flex flex-col sm:flex-row h-[320px] sm:h-[220px] md:h-[280px] lg:h-[400px] rounded-2xl overflow-hidden bg-black"
    >
      <div className="w-full sm:w-1/2 flex flex-col justify-center px-6 py-6 z-20 relative">
        <motion.h2
          variants={textVariants}
          initial="hidden"
          animate={controls}
          className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-white text-center sm:text-left"
        >
          {slide.product}
        </motion.h2>
        <motion.p
          variants={subTextVariants}
          initial="hidden"
          animate={controls}
          className="text-[#AEAEAE] opacity-80 mt-2 md:mt-4 text-sm md:text-base lg:text-lg text-center sm:text-left"
        >
          {slide.productSlogan}
        </motion.p>
        <motion.a
          href={`/products/${slide.itemId}`}
          variants={buttonVariants}
          initial="hidden"
          animate={controls}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hover:cursor-pointer mt-4 sm:mt-6 px-6 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-carousel-title-first via-carousel-title-second to-carousel-title-third text-dark-theme-text font-bold rounded-full text-sm md:text-base lg:text-lg shadow-lg mx-auto sm:mx-0 text-center block"
        >
          ORDER NOW
        </motion.a>
      </div>

      <div className="w-full sm:w-1/2 flex justify-center items-center relative mt-0 sm:mt-0 z-0">
        <div className="mt-[0px] sm:mt-[90px] lg:mt-[140px]">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={controls}
            className=""
          >
            <Image
              src={slide.image}
              alt={slide.product}
              width={400}
              height={400}
              priority
              className="object-cover rounded-xl w-[250px] sm:w-[220px] md:w-[300px] lg:w-[400px]"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SlideFirst;
