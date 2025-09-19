import { getProducts, getProductById } from '@/lib/services/product.service';
import ProductDetails from '@/components/pages/ProductDetails/ProductDetails';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    productId: product.itemId,
  }));
}

export const dynamicParams = false;

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = params;

  const initialProduct = await getProductById(productId);

  if (!initialProduct) {
    notFound();
  }

  return <ProductDetails initialProduct={initialProduct} />;
}
