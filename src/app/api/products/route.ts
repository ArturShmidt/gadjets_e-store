import { NextResponse, NextRequest } from 'next/server';
import {
  getProducts,
  getProductsByCategory,
} from '@/lib/services/product.service';

export async function GET(request: NextRequest) {
  const category = request.nextUrl.searchParams.get('category');

  // Якщо є параметр 'category', викликаємо відповідну функцію сервісу
  if (category) {
    const products = await getProductsByCategory(category);
    return NextResponse.json(products);
  }

  // Якщо параметра немає, викликаємо функцію для отримання всіх продуктів
  const allProducts = await getProducts();
  return NextResponse.json(allProducts);
}
