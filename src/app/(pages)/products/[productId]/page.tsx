import {
  getProducts,
  getProductAndVariants,
  getRelatedProducts,
} from '@/lib/services/product.service';
import ProductDetails from '@/components/pages/ProductDetails/ProductDetails';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> {
  const { product } = await getProductAndVariants(params.productId);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: `Buy ${product.name} - Best Price`,
    description: `Order the ${product.name} with fast shipping. Check out specifications, reviews, and prices at the Nice Gadgets online store.`,
    openGraph: {
      images: [product.images[0]], // Використовуємо перше зображення для соцмереж
    },
  };
}

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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': initialProduct.name,
    'image': initialProduct.images[0],
    'description': initialProduct.description,
    'sku': initialProduct.id,
    'brand': {
      '@type': 'Brand',
      'name': 'Apple',
    },
    'offers': {
      '@type': 'Offer',
      'url': `https://gadgets-e-store.vercel.app/products/${initialProduct.id}`,
      'priceCurrency': 'USD',
      'price': initialProduct.priceDiscount,
      'itemCondition': 'https://schema.org/NewCondition',
      'availability': 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetails
        initialProduct={initialProduct}
        variants={variants}
        relatedProducts={relatedProducts}
      />
    </>
  );
}
