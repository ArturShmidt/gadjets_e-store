'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import CartItem from '@/components/Products/Cart/CartItem';
import CheckoutSummary from '@/components/Products/Cart/CheckoutSummary';
import { useGetProductsQuery } from '@/lib/features/api/apiSlice';
import { Product } from '@/types/product';
import ActionButton from '@/components/UI/ActionButton';
import CategoryHeader from '@/components/UI/CategoryHeader';
import { CategoryName } from '@/types/CategoryName';

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
      <div className=" mx-4 sm:mx-6 lg-max:mx-8 flex justify-center items-center flex-col py-20 dark:bg-dark-theme-bg">
        <h1 className="text-[32px] sm:text-[48px] font-[800] text-light-theme-text dark:text-dark-theme-text mb-4">
          Your cart is empty
        </h1>
        <p className="text-light-theme-text-menu dark:text-text-gray mb-8">
          Looks like you haven&apos;t added anything yet.
        </p>
        <ActionButton name="Start Shopping" />
      </div>
    );
  }

  return (
    <>
      <CategoryHeader
        isCart
        categoryName={CategoryName.Cart}
        total={detailedCartItems.length}
      />
      <div
        className="pt-6 sm:pt-10 px-4 sm:px-6 lg:px-8 lg:flex lg:flex-col
      text-light-theme-text dark:text-dark-theme-text dark:bg-dark-theme-bg "
      >
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center lg:gap-4 pt-8">
          <div className="flex items-center  flex-col gap-4 py-8 lg:py-0">
            {detailedCartItems.slice(0, 4).map((item) => {
              return (
                <CartItem
                  key={item.productId}
                  item={item}
                />
              );
            })}
          </div>
          <div className=" flex justify-center pb-14 lg:pb-0 ">
            <CheckoutSummary
              totalPrice={totalPrice}
              itemsCount={detailedCartItems.length}
            />{' '}
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default ShoppingCart;
