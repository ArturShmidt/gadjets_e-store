import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';
import { ProductType as ProductDetails } from '@/types/ProductType';
import { Product as ProductSummary } from '@/types/product';

const categoryToFileMap = {
  phones: 'phones.json',
  accessories: 'accessories.json',
  tablets: 'tablets.json',
};

async function readJsonFile<T>(filename: string): Promise<T> {
  const jsonDirectory = path.join(process.cwd(), 'data');
  const fileContents = await fs.readFile(
    path.join(jsonDirectory, filename),
    'utf8',
  );
  return JSON.parse(fileContents);
}

export async function GET(
  request: Request,
  { params }: { params: { itemId: string } },
) {
  const { itemId } = params;

  const allProducts = await readJsonFile<ProductSummary[]>('products.json');
  const productSummary = allProducts.find((p) => p.itemId === itemId);

  if (!productSummary) {
    return new NextResponse('Product not found', { status: 404 });
  }

  const category = productSummary.category;
  const detailedFileName = categoryToFileMap[category];

  if (!detailedFileName) {
    return new NextResponse('Product category not found', { status: 404 });
  }

  const detailedData = await readJsonFile<ProductDetails[]>(detailedFileName);
  const productDetails = detailedData.find((item) => item.id === itemId);

  if (!productDetails) {
    return new NextResponse('Product details not found', { status: 404 });
  }

  return NextResponse.json(productDetails);
}
