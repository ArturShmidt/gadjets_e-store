// #region Imports

import Catalog from '@/components/Products/Catalog';
import { getValidCategories } from '@/lib/categories';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import HomeIconComponent from '@/components/UI/HomeIconComponent';
import ArrowRightCategoryComponent from '@/components/UI/ArrowRightCategoryComponent';
import ArrowLeftComponent from '@/components/UI/ShoppingCart/ArrowLeftComponent';
import { isShoppingCartPage } from '@/lib/utils';
import ShoppingCart from '@/components/Products/ShoppingCart/ShoppingCart';

// #endregion
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
  const IsShoppingCartPage = isShoppingCartPage(`/${categoryName}`);

  const formattedCategory =
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  // список товарів
  // const products = await fetchProductsByCategory(categoryName);

  // список наявних категорій
  const validCategories = await getValidCategories();

  if (!validCategories.includes(params.category)) {
    notFound();
  }

  return (
    <div className="dark:bg-dark-theme-bg px-4 sm:px-6 lg:px-8 pt-6 pb-16 lg:pb-20">
      {IsShoppingCartPage ?
        <nav className="lg:flex lg:justify-start lg:items-start lg:flex-col">
          <button className="flex mb-6 sm:mb-4 w-13 cursor-pointer">
            <div
              className="mr-1 
          text-light-theme-text dark:text-dark-theme-text "
            >
              <ArrowLeftComponent />
            </div>
            <span className="text-light-theme-text-menu dark:text-dark-theme-text font-bold text-[12px] ">
              Back
            </span>
          </button>
          <h2 className="font-bold text-[32px] sm:text-[48px] leading-[41px] sm:leading-[56px] text-light-theme-text dark:text-dark-theme-text">
            Cart
          </h2>
        </nav>
      : <nav className="flex items-center text-sm mb-4 sm:pb-6 dark:text-dark-theme-text text-light-theme-text">
          <Link
            href="/"
            className="transition-transform duration-300 hover:scale-[1.4] cursor-pointer"
          >
            <HomeIconComponent />
          </Link>
          <div className="px-2">
            <ArrowRightCategoryComponent />
          </div>
          <span className="dark:text-text-gray text-light-theme-text-menu ">
            {formattedCategory}
          </span>
        </nav>
      }

      {/* 3. Відображаємо список товарів */}
      {/* <ProductList products={products} /> */}
      {IsShoppingCartPage ?
        <ShoppingCart />
      : <Catalog categoryName={categoryName} />}
    </div>
  );
}
