import { getCategoriesWithCount } from '@/lib/services/product.service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const categories = await getCategoriesWithCount();
  return NextResponse.json(categories);
}
