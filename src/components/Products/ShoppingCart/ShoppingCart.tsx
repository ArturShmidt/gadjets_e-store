'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import ShoppingCartItem from '@/components/Products/ShoppingCart/ShoppingCartItem';
import CheckoutSummary from '@/components/Products/ShoppingCart/CheckoutSummary';
import CartHeading from '@/components/UI/ShoppingCart/CartHeading';
import Link from 'next/link';
import { useGetProductsQuery } from '@/lib/features/api/apiSlice';
import { Product } from '@/types/product';

const ShoppingCart: React.FC = () => {
  // 1. Отримуємо повний список ВСІХ продуктів з кешу RTK Query
  const { data: allProducts, isLoading, isError } = useGetProductsQuery();

  // 2. Отримуємо актуальний список товарів з кошика (лише ID та кількість)
  const cartItems = useSelector(
    (state: RootState) => state.persisted.cart.items,
  );

  // Обробляємо стани завантаження
  if (isLoading) {
    return <div>Завантаження кошика...</div>;
  }

  // if (isError || !allProducts) {
  //   return <div>Помилка завантаження.</div>;
  // }

  // 3. "Обєднуємо" дані
  const detailedCartItems = cartItems
    .map((cartItem) => {
      const productDetails = allProducts?.find(
        (p) => p.itemId === cartItem.productId,
      );
      return {
        ...cartItem,
        product: productDetails,
      };
    })
    .filter(
      (
        item,
      ): item is { product: Product; productId: string; quantity: number } =>
        Boolean(item.product),
    );

  const totalPrice = detailedCartItems.reduce(
    (sum, item) => sum + item.product!.price * item.quantity,
    0,
  );

  if (detailedCartItems.length === 0) {
    return (
      <div className="text-center py-20 dark:bg-dark-theme-bg">
        <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-gray-500 mb-8">
          Looks like you haven&apos;t added anything yet.
        </p>
        <Link
          href="/phones"
          className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <>
      <CartHeading />

      <div
        className="pt-6 sm:pt-10 px-4 sm:px-6 lg:px-8 lg:flex lg:flex-col
      text-light-theme-text dark:text-dark-theme-text dark:bg-dark-theme-bg"
      >
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center lg:gap-4 pt-8">
          <div className="flex items-center flex-col gap-4 py-8 lg:py-0">
            {detailedCartItems.map((item) => {
              return (
                <ShoppingCartItem
                  key={item.productId}
                  item={item}
                />
              );
            })}
          </div>
          <div className="flex justify-center pb-14 lg:pb-0">
            <CheckoutSummary totalPrice={totalPrice} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
