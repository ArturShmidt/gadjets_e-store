import { getBestsellers } from '@/lib/services/product.service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const products = await getBestsellers();
  return NextResponse.json(products);
}
