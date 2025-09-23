import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { getProducts } from '@/lib/services/product.service';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  // Отримуємо всі товари
  const allProducts = await getProducts();

  // Залишаємо тільки мінімальні дані для AI
  const productsForAI = allProducts.map((p) => ({
    name: p.name,
    category: p.category,
    price: p.price,
  }));

  const prompt = `
Товари на сайті:
${JSON.stringify(productsForAI)}

Користувач запитав: "${message}"
Дай коротку та зрозумілу відповідь, яка базується на цих товарах.
`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
    });

    return NextResponse.json({
      answer: completion.choices[0].message?.content || 'There is no answer',
    });
  } catch (error: unknown) {
    console.error('OpenAI Error:', error);
    return NextResponse.json(
      { answer: 'An error occurred while accessing the AI.' },
      { status: 500 },
    );
  }
}
