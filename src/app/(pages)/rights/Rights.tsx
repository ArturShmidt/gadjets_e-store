'use client';

import {
  ShieldCheck,
  Info,
  ShoppingCart,
  Shield,
  RefreshCw,
  Wrench,
  Tag,
  Lock,
} from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const rightsList = [
  {
    title: 'Right to Quality Products',
    description:
      'Customers are entitled to receive original, brand-new mobile devices and accessories with a valid warranty.',
    icon: ShieldCheck,
  },
  {
    title: 'Right to Information',
    description:
      'Customers have the right to full, accurate, and clear information about product specifications, prices, warranty terms, and return policies.',
    icon: Info,
  },
  {
    title: 'Right to Choose',
    description:
      'Customers may freely choose among available brands, models, and price ranges without pressure or unfair restrictions.',
    icon: ShoppingCart,
  },
  {
    title: 'Right to Safety',
    description:
      'All products must comply with safety standards and should not pose risks to the customer’s health or data security.',
    icon: Shield,
  },
  {
    title: 'Right to Return or Exchange',
    description:
      'Customers have the right to return or exchange defective items within the period specified in the store’s return policy.',
    icon: RefreshCw,
  },
  {
    title: 'Right to Warranty Service',
    description:
      'Customers are entitled to warranty repairs or replacements for covered issues within the warranty period.',
    icon: Wrench,
  },
  {
    title: 'Right to Fair Pricing',
    description:
      'Customers must be charged only the listed price without hidden fees. Discounts and promotions should be transparent and honored.',
    icon: Tag,
  },
  {
    title: 'Right to Privacy',
    description:
      'Customers’ personal data (such as contact information, billing details) must be protected and not shared without consent.',
    icon: Lock,
  },
];

const Rights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = next, -1 = prev

  const nextCard = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % rightsList.length);
  };

  const prevCard = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + rightsList.length) % rightsList.length,
    );
  };

  const Icon = rightsList[currentIndex].icon;

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      rotate: dir > 0 ? 10 : -10,
    }),
    center: { x: 0, opacity: 1, rotate: 0 },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      rotate: dir > 0 ? -10 : 10,
    }),
  };

  return (
    <div className="flex flex-col items-center pb-16 pt-6 sm:pt-8 lg:pb-20 lg:pt-14 px-4 sm:px-8 lg:px-16 dark:bg-dark-theme-bg">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-light-theme-text dark:text-dark-theme-text mb-10">
        Customer Rights
      </h1>

      <div className="relative w-full max-w-xl h-[400px] flex items-center justify-center">
        <AnimatePresence custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="absolute top-0 w-full p-8 rounded-3xl shadow-2xl border border-light-theme-border-active dark:border-dark-theme-border-hover bg-white dark:bg-item-bg flex flex-col items-start"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-dark-theme-text dark:bg-dark-theme-btn-hover mb-5">
              <Icon className="w-7 h-7 text-light-theme-btn-product-bg dark:text-dark-theme-text" />
            </div>
            <h2 className="text-xl font-semibold text-light-theme-text dark:text-dark-theme-text mb-3">
              {rightsList[currentIndex].title}
            </h2>
            <p className="text-base text-light-theme-text-menu dark:text-text-gray leading-relaxed">
              {rightsList[currentIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex gap-4 mt-8">
        <button
          onClick={prevCard}
          className="px-6 py-2 bg-light-theme-btn-product-bg dark:bg-dark-theme-btn-selected text-white rounded-lg hover:bg-text-gray cursor-pointer transition"
        >
          Prev
        </button>
        <button
          onClick={nextCard}
          className="px-6 py-2 bg-light-theme-btn-product-bg dark:bg-dark-theme-btn-selected text-white rounded-lg hover:bg-text-gray cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Rights;
