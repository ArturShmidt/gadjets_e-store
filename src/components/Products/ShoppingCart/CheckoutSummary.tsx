'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { useGetProductsQuery } from '@/lib/features/api/apiSlice';

const CheckoutSummary = () => {
  // 1. Отримуємо повний список ВСІХ продуктів з кешу RTK Query
  const { data: allProducts, isLoading, isError } = useGetProductsQuery();

  // 2. Отримуємо актуальний список товарів з кошика (лише ID та кількість)
  const cartItems = useSelector(
    (state: RootState) => state.persisted.cart.items,
  );

  // Обробляємо завантаження повного списку товарів
  if (isLoading) {
    return <div>Loading prices...</div>;
  }
  if (isError || !allProducts) {
    return <div>Could not load summary.</div>;
  }

  // 3. "Об'єднуємо" дані: для кожного товару в кошику знаходимо його повні дані
  const detailedCartItems = cartItems
    .map((cartItem) => {
      const productDetails = allProducts.find(
        (p) => p.itemId === cartItem.productId,
      );
      return {
        ...cartItem,
        product: productDetails, // Додаємо повний об'єкт продукту
      };
    })
    .filter((item) => item.product); // Видаляємо товари, які могли не знайтись

  // 4. Розраховуємо загальну суму на основі об'єднаних даних
  const totalPrice = detailedCartItems.reduce(
    (sum, item) => sum + item.product!.price * item.quantity,
    0,
  );

  if (detailedCartItems.length === 0) {
    return (
      <div>
        <h3 className="text-xl font-bold mb-4">Summary</h3>
        <p>Your cart is empty.</p>
      </div>
    );
  }
  return (
    <div className="p-4 border border-gray-700 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Summary</h3>
      <ul>
        {detailedCartItems.map((item) => (
          <li
            key={item.productId}
            className="flex justify-between mb-2"
          >
            <span>
              {item.product!.name} x{item.quantity}
            </span>
            <span>${(item.product!.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="border-t border-gray-700 my-4" />
      <div className="flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CheckoutSummary;
