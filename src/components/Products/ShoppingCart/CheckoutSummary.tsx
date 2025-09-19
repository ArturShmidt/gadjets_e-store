'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

const CheckoutSummary = () => {
  // 1. Отримуємо актуальний список товарів з кошика за допомогою useSelector
  const cartItems = useSelector(
    (state: RootState) => state.persisted.cart.items,
  );

  // 2. Розраховуємо загальну суму на основі даних з кошика
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.product.priceDiscount * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
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
        {cartItems.map((item) => (
          <li
            key={item.product.id}
            className="flex justify-between mb-2"
          >
            <span>
              {item.product.name} x{item.quantity}
            </span>
            <span>
              ${(item.product.priceDiscount * item.quantity).toFixed(2)}
            </span>
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
