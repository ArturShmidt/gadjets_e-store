import { promises as fs } from 'fs';
import path from 'path';
import { Product as ProductSummary } from '@/types/product';
import {
  CategoryWithCount,
  ProductType as ProductDetails,
} from '@/types/CategoryType';
import { CategoryName } from '@/types/CategoryName';

async function readJsonFile<T>(filename: string): Promise<T> {
  const jsonDirectory = path.join(process.cwd(), 'data');
  const fileContents = await fs.readFile(
    path.join(jsonDirectory, filename),
    'utf8',
  );
  return JSON.parse(fileContents);
}

const categoryToFileMap: Record<string, string> = {
  phones: 'phones.json',
  accessories: 'accessories.json',
  tablets: 'tablets.json',
};

/**
 * Повертає повний список продуктів з `products.json`.
 */
export async function getProducts(): Promise<ProductSummary[]> {
  return await readJsonFile<ProductSummary[]>('products.json');
}

/**
 * Повертає список унікальних валідних категорій.
 */
export async function getValidCategories(): Promise<string[]> {
  const products = await getProducts();
  const uniqueCategories = [...new Set(products.map((p) => p.category))];
  return uniqueCategories;
}

/**
 * Повертає список продуктів для конкретної категорії з можливістю сортування.
 */
export async function getProductsByCategory(
  category: string,
  options: { sort?: string; order?: 'asc' | 'desc' } = {},
): Promise<ProductSummary[]> {
  if (category === CategoryName.Cart) {
    return [];
  }

  const allProducts = await getProducts();
  const filtered = allProducts.filter((p) => p.category === category);

  // Тут можна буде додати логіку сортування
  return filtered;
}

/**
 * Повертає детальну інформацію про один продукт за його `itemId`.
 */
export async function getProductById(
  itemId: string,
): Promise<ProductDetails | null> {
  const products = await getProducts();
  const productSummary = products.find((p) => p.itemId === itemId);

  if (!productSummary) {
    return null; // Продукт не знайдено в загальному списку
  }

  const detailedFileName = categoryToFileMap[productSummary.category];
  if (!detailedFileName) {
    return null; // Невідома категорія
  }

  const detailedData = await readJsonFile<ProductDetails[]>(detailedFileName);
  return detailedData.find((item) => item.id === itemId) || null;
}

/**
 * Повертає список найновіших моделей (за роком).
 */

export async function getNewProducts(
  limit: number = 10,
): Promise<ProductSummary[]> {
  const allProducts = await getProducts();

  if (allProducts.length === 0) {
    return [];
  }

  const maxYear = Math.max(...allProducts.map((path) => path.year));

  return allProducts.filter((p) => p.year === maxYear).slice(0, limit);
}

export async function getBestsellers() {
  const allProducts = await getProducts();

  const limits = {
    phones: 4,
    tablets: 3,
    accessories: 3,
  } as const;

  const top: Record<keyof typeof limits, ProductSummary[]> = {
    phones: [],
    tablets: [],
    accessories: [],
  };

  for (const p of allProducts) {
    const category = p.category as keyof typeof limits;
    if (!(category in limits)) continue;

    const arr = top[category];
    arr.push(p);
    arr.sort((a, b) => b.fullPrice - b.price - (a.fullPrice - a.price));

    if (arr.length > limits[category]) {
      arr.pop();
    }
  }

  return [...top.phones, ...top.tablets, ...top.accessories];
}

export async function getCategoriesWithCount(): Promise<CategoryWithCount[]> {
  const allProducts = await getProducts();

  const counts: { [key: string]: number } = {};

  for (const product of allProducts) {
    counts[product.category] = (counts[product.category] || 0) + 1;
  }

  return Object.entries(counts).map(([id, count]) => ({
    id: id,
    // капіталізуємо
    name: id.charAt(0).toUpperCase() + id.slice(1),
    count: count,
  }));
}

export async function getRelatedProducts(
  itemId: string,
  limit: number = 10,
): Promise<ProductSummary[]> {
  const allProducts = await getProducts();
  const currentProduct = allProducts.find((p) => p.itemId === itemId);
  if (!currentProduct) {
    return [];
  }

  if (currentProduct.category === 'phones') {
    const match = currentProduct.name.match(/\d{2,}/);
    if (match) {
      const modelNumber = match[0];
      return allProducts
        .filter(
          (p) =>
            p.category === 'phones' &&
            p.itemId !== itemId &&
            p.name.includes(modelNumber),
        )
        .slice(0, limit);
    }
  }

  return allProducts
    .filter(
      (p) => p.category === currentProduct.category && p.itemId !== itemId,
    )
    .slice(0, limit);
}
