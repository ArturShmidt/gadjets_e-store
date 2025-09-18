// #region Imports

import { Product as ProductSummary } from '@/types/product';

// for component WTF
import Link from 'next/link';

import Catalog from '@/components/Products/Catalog';
import HomeIconComponent from '@/components/UI/HomeIconComponent';
import ArrowRightCategoryComponent from '@/components/UI/ArrowRightCategoryComponent';

import { CategoryName } from '@/types/CategoryName';

import { getValidCategories } from '@/lib/categories';
import { getProductsByCategory } from '@/lib/services/product.service';

// #endregion

function ComponentWTF({ categoryName }: { categoryName: CategoryName }) {
  const formattedCategory =
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
  return (
    <>
      <nav
        className="
    flex items-center text-sm mb-4 sm:pb-6
    dark:text-dark-theme-text text-light-theme-text
    px-4 sm:px-6 lg:px-0
    mx-auto
    max-w-[320px] sm:max-w-[640px] lg:max-w-[1200px]
  "
      >
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
    </>
  );
}

/**
 * Валідація: Створюємо список всіх валідних URL-параметрів.
 */
export async function generateStaticParams() {
  const categories = await getValidCategories();
  const allValidRoutes = [...categories, 'shoppingcart'];

  return allValidRoutes.map((route) => ({
    category: route,
  }));
}

export const dynamicParams = false;

export default async function CategoryPage({
  params,
}: {
  params: { category: CategoryName };
}) {
  const { category } = params;

  // ✅ Викликаємо функцію з сервісу
  const initialProducts: ProductSummary[] =
    await getProductsByCategory(category);

  return (
    <div className="dark:bg-dark-theme-bg px-4 sm:px-6 lg:px-8 pt-6 pb-16 lg:pb-20">
      {/* TODO add cart to routing */}
      <ComponentWTF categoryName={category} />

      {/* 3. Відображаємо список товарів */}
      {/* <ProductList products={products} /> */}
      <Catalog
        categoryName={category}
        initialProducts={initialProducts}
      />
    </div>
  );
}
