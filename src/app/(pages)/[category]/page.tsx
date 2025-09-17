// #region Imports

import Link from 'next/link';
import { notFound } from 'next/navigation';

import Catalog from '@/components/Products/Catalog';
import HomeIconComponent from '@/components/UI/HomeIconComponent';
import ArrowRightCategoryComponent from '@/components/UI/ArrowRightCategoryComponent';
import ShoppingCart from '@/components/Products/ShoppingCart/ShoppingCart';
import CartHeading from '@/components/UI/ShoppingCart/CartHeading';

import { CategoryName } from '@/types/CategoryName';

import { getValidCategories } from '@/lib/categories';
import { isShoppingCartPage } from '@/lib/utils';

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
  params: { category: CategoryName };
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
    <div className="dark:bg-dark-theme-bg px-4 sm:px-6 lg:px-8 pt-6 pb-16 lg:pb-20 min-h-screen">
      {IsShoppingCartPage ?
        <CartHeading />
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
