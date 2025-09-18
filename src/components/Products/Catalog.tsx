'use client';

import { useGetProductsQuery } from '@/lib/features/api/apiSlice';
import { Product as ProductSummary } from '@/types/product';

import ProductList from './ProductList';
import { CategoryName } from '@/types/CategoryName';

import CategoriesHeading from '@/components/UI/CategoriesHeading';

export default function Catalog({
  categoryName,
  initialProducts,
}: {
  categoryName: CategoryName;
  initialProducts: ProductSummary[];
}) {
  // 1. Використовуємо RTK Query для керування даними на клієнті.
  //    - `initialProducts` використовуються для миттєвого відображення.
  //    - `useGetProductsQuery` "підхоплює" ці дані для кешування та оновлень.
  const {
    data: products = initialProducts, // <-- Отримуємо дані
    isLoading,
    isError,
  } = useGetProductsQuery(categoryName);

  // 2. Обробляємо стани завантаження та помилки.
  // if (isLoading) {
  //   return <div>Завантаження...</div>;
  // }
  if (isError) {
    return <div>Сталася помилка.</div>;
  }

  // 3. Фільтрувати вручну більше не потрібно.
  //    Дані, що приходять, ВЖЕ відфільтровані на сервері.
  const total = products.length;

  return (
    <>
      <CategoriesHeading
        categoryName={categoryName}
        total={total}
      />
      <ProductList
        productlist={products}
        total={total}
      />
    </>
  );
}
