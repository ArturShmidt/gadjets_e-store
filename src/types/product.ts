import { CategoryName } from './CategoryName';

export const VALID_CATEGORIES = Object.values(CategoryName).slice(1, 4);

type Category = (typeof VALID_CATEGORIES)[number];

export interface Product {
  id: number;
  category: Category;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
}

export function isProduct(item: unknown): item is Product {
  if (item === null || typeof item !== 'object') {
    return false;
  }
  const product = item as Record<string, unknown>;
  return (
    typeof product.category === 'string' &&
    (VALID_CATEGORIES as readonly string[]).includes(product.category)
  );
}
