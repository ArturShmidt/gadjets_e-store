'use client';
import Carousel from '@/components/Layout/Carousel/Carousel';
import ShopByCategory from '@/components/Layout/shopByCategory/ShopByCategory';
import AppleLoader from '@/components/UI/loader/Loader';
import ProductSlider from '@/components/UI/productSlider/ProductSlider';
// import ProductCart from '@/components/Products/ProductCart';
import Link from 'next/link';

export default function Home() {
  const someProductId = 'apple-iphone-14-pro'; // Приклад ID товару
  return (
    <div className="flex flex-col pb-16 pt-6 sm:pt-8 lg:pb-20 lg:pt-14 dark:bg-dark-theme-bg">
      {/* <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"> */}
      {/* <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"> */}
      <div className="flex flex-grow flex-col items-center justify-center  dark:text-dark-theme-text">
        {/* ТЕCТОВИЙ КЕЙС */}
        {/* ← Веде на products/[productId]/page.tsx */}
      </div>
      <div>
        <Carousel />
        <ProductSlider title="Brand new models" />
        <ShopByCategory />
        <ProductSlider title="Hot prices" />
        <AppleLoader className="text-white" />
        <AppleLoader
          size="lg"
          speed={2}
          className="text-white"
        />
        <AppleLoader
          size={100}
          speed={0.8}
          className="text-white"
        />
      </div>
      {/* </main> */}
      {/* </div> */}
    </div>
  );
}
