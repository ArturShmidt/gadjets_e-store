import { getRelatedProducts } from '@/lib/services/product.service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ productId: string }> },
) {
  const { productId } = await params;
  const products = await getRelatedProducts(productId);

  return NextResponse.json(products);
}
