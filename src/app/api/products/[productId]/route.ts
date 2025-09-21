import { NextResponse, NextRequest } from 'next/server';
import { getProductById } from '@/lib/services/product.service';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ productId: string }> },
) {
  const { productId } = await params;

  const productDetails = await getProductById(productId);

  if (!productDetails) {
    return new NextResponse('Product not found', { status: 404 });
  }

  return NextResponse.json(productDetails);
}
