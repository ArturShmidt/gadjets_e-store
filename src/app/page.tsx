import Link from 'next/link';

export default function Home() {
  const someProductId = 'apple-iphone-15-pro'; // Приклад ID товару
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        Home Page
        {/* ТЕCТОВИЙ КЕЙС */}
        {/* ← Веде на products/[productId]/page.tsx */}
        <Link href={`/products/${someProductId}`}>View iPhone 15 Pro</Link>
      </main>
    </div>
  );
}
