import ProductDetails from '@/components/Products/ProductDetails/ProductDetails';

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  // 1. Отримуємо ID товару з URL
  const productId = params.productId; // напр., "iphone-15-pro"

  // 2. Завантажуємо дані для цього конкретного товару
  // const product = await fetchProductById(productId);

  return (
    <article>
      {/* 3. Відображаємо детальну інформацію про товар */}
      <ProductDetails productId={productId} />
    </article>
  );
}
