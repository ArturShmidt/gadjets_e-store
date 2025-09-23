import {
  getProducts,
  getProductAndVariants,
  getRelatedProducts,
} from '@/lib/services/product.service';
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

  const [productData, relatedProducts] = await Promise.all([
    getProductAndVariants(productId),
    getRelatedProducts(productId),
  ]);

  const { product: initialProduct, variants } = productData;

  if (!initialProduct) {
    notFound();
  }

  return (
    <ProductDetails
      initialProduct={initialProduct}
      variants={variants}
      relatedProducts={relatedProducts}
    />
  );
}
