import HomePage from '@/components/pages/HomePage';
import { getProducts } from '@/lib/services/product.service';
import { Product } from '@/types/product';

export default async function Home() {
  const allProducts: Product[] = await getProducts();

  const hotPriceProducts = [...allProducts]
    .sort((a, b) => b.fullPrice - b.price - (a.fullPrice - a.price))
    .slice(0, 10);

  const maxYear = Math.max(...allProducts.map((p) => p.year));
  const newModels = allProducts.filter((p) => p.year === maxYear).slice(0, 10);

  return (
    <HomePage
      allProducts={allProducts}
      hotPriceProducts={hotPriceProducts}
      newModels={newModels}
    />
  );
}
