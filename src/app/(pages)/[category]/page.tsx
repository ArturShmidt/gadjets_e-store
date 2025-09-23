import { Product as ProductSummary } from '@/types/product';
import Catalog from '@/components/Products/Catalog';
import { CategoryName } from '@/types/CategoryName';
import { getValidCategories } from '@/lib/services/product.service';
import { getProductsByCategory } from '@/lib/services/product.service';
import CategoryHeader from '@/components/UI/CategoryHeader';
import { Metadata } from 'next';

async function getCategoryDisplayName(slug: string): Promise<string> {
  const nameMap: { [key: string]: string } = {
    phones: 'Phones',
    tablets: 'Tablets',
    accessories: 'Accessories',
  };
  return nameMap[slug] || slug.charAt(0).toUpperCase() + slug.slice(1);
}

export async function generateMetadata({
  params,
}: {
  params: { category: CategoryName };
}): Promise<Metadata> {
  const categoryName = await getCategoryDisplayName(params.category);

  return {
    title: `Shop ${categoryName} Online - Catalog`,
    description: `Explore our wide selection of ${categoryName.toLowerCase()} at the Nice Gadgets store. Find the best deals and latest models.`,
  };
}

export async function generateStaticParams() {
  const categories = await getValidCategories();

  return categories.map((route) => ({
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

  const initialProducts: ProductSummary[] =
    await getProductsByCategory(category);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://gadgets-e-store.vercel.app/',
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': category,
      },
    ],
  };

  return (
    <div className="dark:bg-dark-theme-bg px-4 sm:px-6 lg:px-8 pt-6 pb-16 lg:pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CategoryHeader
        categoryName={category}
        total={initialProducts.length}
      />

      <Catalog
        categoryName={category}
        initialProducts={initialProducts}
      />
    </div>
  );
}
