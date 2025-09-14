'use client';
import ShopByCategory from '@/components/Layout/shopByCategory/shopByCategory';
// import ProductCart from '@/components/Products/ProductCart';
import Link from 'next/link';

export default function Home() {
  const someProductId = 'apple-iphone-15-pro'; // Приклад ID товару
  return (
    <div className="flex flex-col px-4 pb-16 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pb-20 lg:pt-14">
      {/* <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"> */}
      {/* <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"> */}
      <div className="flex flex-grow flex-col items-center justify-center">
        Home Page
        {/* ТЕCТОВИЙ КЕЙС */}
        {/* ← Веде на products/[productId]/page.tsx */}
        <Link href={`/products/${someProductId}`}>View iPhone 15 Pro</Link>
      </div>
      <div>
        <ShopByCategory />
      </div>
      {/* </main> */}
      {/* </div> */}
    </div>
  );
}
