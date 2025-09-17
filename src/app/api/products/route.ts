import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';
import { Product as ProductSummary } from '@/types/product';

export async function GET(request: Request) {
  const jsonDirectory = path.join(process.cwd(), 'data');
  const fileContents = await fs.readFile(
    path.join(jsonDirectory, 'products.json'),
    'utf8',
  );

  const data: ProductSummary[] = JSON.parse(fileContents);

  return NextResponse.json(data);
}
