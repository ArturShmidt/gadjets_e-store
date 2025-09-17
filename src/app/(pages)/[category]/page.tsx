import Catalog from '@/components/Products/Catalog';
import { getValidCategories } from '@/lib/categories';
import ShoppingCart from '@/components/Products/ShoppingCart/ShoppingCart';
import { notFound } from 'next/navigation';
import { Linden_Hill } from 'next/font/google';
import Link from 'next/link';

export const dynamicParams = false;

// export async function generateStaticParams() {
//     const categories = await getValidCategories();

//     return categories.map((category) => ({
//         category: category,
//     }));
// }

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const categoryName = (await Promise.resolve(params)).category;

  const formattedCategory =
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  if (categoryName === 'shoppingcart') {
    return <ShoppingCart />;
  }
  // список товарів
  // const products = await fetchProductsByCategory(categoryName);

  // список наявних категорій
  const validCategories = await getValidCategories();

  if (!validCategories.includes(params.category)) {
    notFound();
  }

  return (
    <div className="dark:bg-dark-theme-bg px-4 sm:px-6 lg:px-8 pt-6 pb-16 lg:pb-20">
      <nav className="flex items-center text-sm mb-4 sm:pb-6 dark:text-dark-theme-text text-light-theme-text">
        <Link
          href="/"
          className="transition-transform duration-300 hover:scale-[1.2]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </Link>
        <span className="mx-2 dark:text-dark-theme-border-hover text-light-theme-border-active">
          {'>'}
        </span>
        <Link
          href={`/${categoryName}`}
          className="dark:text-text-gray text-light-theme-text-menu"
        >
          {formattedCategory}
        </Link>
      </nav>
      {/* 3. Відображаємо список товарів */}
      {/* <ProductList products={products} /> */}
      <Catalog categoryName={categoryName} />
    </div>
  );
}
