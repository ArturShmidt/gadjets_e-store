// #region Imports

import { Product as ProductSummary } from '@/types/product';

// for component WTF

import Catalog from '@/components/Products/Catalog';

import { CategoryName } from '@/types/CategoryName';

import { getValidCategories } from '@/lib/services/product.service';
import { getProductsByCategory } from '@/lib/services/product.service';
import CategoryHeader from '@/components/UI/CategoryHeader';

// #endregion

/**
 * Валідація: Створюємо список всіх валідних URL-параметрів.
 */
export async function generateStaticParams() {
  const categories = await getValidCategories();
  const allValidRoutes = [...categories, CategoryName.Cart];

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
      <CategoryHeader
        categoryName={category}
        total={initialProducts.length}
      />

      {/* 3. Відображаємо список товарів */}
      {/* <ProductList products={products} /> */}
      <Catalog
        categoryName={category}
        initialProducts={initialProducts}
      />
    </div>
  );
}
