import { NextResponse, NextRequest } from 'next/server';
import { getProductById } from '@/lib/services/product.service';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ itemId: string }> },
) {
  const { itemId } = await params;

  const productDetails = await getProductById(itemId);

  if (!productDetails) {
    return new NextResponse('Product not found', { status: 404 });
  }

  return NextResponse.json(productDetails);
}
