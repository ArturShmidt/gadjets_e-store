import HomePage from '@/components/pages/HomePage';
import {
  getBestsellers,
  getCategoriesWithCount,
  getNewProducts,
} from '@/lib/services/product.service';

export default async function Home() {
  const [newProducts, bestsellers, categories] = await Promise.all([
    getNewProducts(),
    getBestsellers(),
    getCategoriesWithCount(),
  ]);

  return (
    <HomePage
      newProducts={newProducts}
      bestsellers={bestsellers}
      categories={categories}
    />
  );
}
