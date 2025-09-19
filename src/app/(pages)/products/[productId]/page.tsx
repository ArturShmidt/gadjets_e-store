import { getProducts, getProductById } from '@/lib/services/product.service';
import ProductDetails from '@/pages/ProductDetails/ProductDetails';
import { notFound } from 'next/navigation';

/**
 * 1. ВАЛІДАЦІЯ: Створюємо список всіх існуючих сторінок товарів
 */
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    productId: product.itemId,
  }));
}

export const dynamicParams = false;

/**
 * 2. ОСНОВНИЙ КОМПОНЕНТ СТОРІНКИ (Серверний)
 */
export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = params;

  // 3. ЗАВАНТАЖЕННЯ ДАНИХ НА СЕРВЕРІ
  const initialProduct = await getProductById(productId);

  // Якщо сервіс повернув null (товар не знайдено), показуємо 404
  if (!initialProduct) {
    notFound();
  }

  // 4. РЕНДЕР КЛІЄНТСЬКОГО КОМПОНЕНТА
  // Передаємо завантажені дані в клієнтський компонент
  return <ProductDetails initialProduct={initialProduct} />;
}
