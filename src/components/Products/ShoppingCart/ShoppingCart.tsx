'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import ShoppingCartItem from '@/components/Products/ShoppingCart/ShoppingCartItem';
import CheckoutSummary from '@/components/Products/ShoppingCart/CheckoutSummary';
import Link from 'next/link';

const ShoppingCart: React.FC = () => {
  // 1. Отримуємо актуальний список товарів з кошика за допомогою useSelector
  const cartItems = useSelector(
    (state: RootState) => state.persisted.cart.items,
  );

  // 2. Якщо кошик порожній, показуємо відповідне повідомлення
  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20 dark:bg-dark-theme-bg">
        <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-gray-500 mb-8">
          Looks like you haven&apos;t added anything to your cart yet.
        </p>
        <Link
          href="/phones"
          className="dark:bg-dark-theme-bg dark:text-dark-theme-text px-6 py-3 rounded-lg hover:bg-gray-800"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div
      className="pt-6 sm:pt-10 px-4 sm:px-6 lg:px-8 lg:flex lg:flex-col
      text-light-theme-text dark:text-dark-theme-text dark:bg-dark-theme-bg"
    >
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center lg:gap-4 pt-8">
        <div className="flex items-center flex-col gap-4 py-8 lg:py-0">
          {/* 3. Проходимось по масиву товарів з кошика */}
          {cartItems.map((item) => {
            return (
              <ShoppingCartItem
                key={item.product.id}
                item={item} // Передаємо весь обєкт CartItem
              />
            );
          })}
        </div>
        <div className="flex justify-center pb-14 lg:pb-0">
          <CheckoutSummary />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
