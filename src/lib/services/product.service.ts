import { promises as fs } from 'fs';
import path from 'path';
import { Product as ProductSummary } from '@/types/product';
import { ProductType as ProductDetails } from '@/types/CategoryType';
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
