import Catalog from '@/components/Products/Catalog';
import { getValidCategories } from '@/lib/categories';
import { notFound } from 'next/navigation';

export const dynamicParams = false;

// export async function generateStaticParams() {
//     const categories = await getValidCategories();

//     return categories.map((category) => ({
//         category: category,
//     }));
// }

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const categoryName = params.category;
  // список товарів
  // const products = await fetchProductsByCategory(categoryName);

  // список наявних категорій
  const validCategories = await getValidCategories();
  if (!validCategories.includes(params.category)) {
    notFound();
  }
  return (
    <div className="dark:bg-dark-theme-bg px-4 sm:px-6 lg:px-8 pt-6 pb-16 lg:pb-20">
      <h1 className="capitalize">Icon from MYKYTA: {categoryName}</h1>
      {/* 3. Відображаємо список товарів */}
      {/* <ProductList products={products} /> */}
      <Catalog categoryName={categoryName} />
    </div>
  );
}
