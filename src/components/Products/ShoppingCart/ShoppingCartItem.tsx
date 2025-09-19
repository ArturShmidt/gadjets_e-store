'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from '@/lib/features/cart/cartSlice';

import { Product } from '@/types/product';
import MinusComponent from '@/components/UI/ShoppingCart/MinusComponent';
import PlusComponent from '@/components/UI/ShoppingCart/PlusComponent';
import CloseComponent from '@/components/UI/ShoppingCart/CloseComponent';

// 1. Оновлюємо пропси: компонент тепер приймає об'єкт CartItem
interface CartItem {
  product: Product;
  quantity: number;
}

type Props = {
  item: CartItem;
};

const ShoppingCartItem: React.FC<Props> = ({ item }) => {
  const { product, quantity } = item;
  const dispatch = useDispatch(); // 2. Ініціалізуємо dispatch для відправки команд

  // 3. Локальний стан `useState` для кількості повністю видалено.

  return (
    <>
      <div
        className="sm:w-148 sm:h-32 lg:w-188 p-4 sm:p-6 flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 items-center
      bg-white dark:bg-item-bg 
      border rounded-[16px] border-light-theme-border-color dark:border-dark-theme-border-color"
    >
      <div className="flex justify-between gap-4 sm:gap-6">
        {/* 4. Кнопка видалення тепер відправляє action `removeItem` */}
        <button
          onClick={() => dispatch(removeItem(product.itemId))}
          className="w-4 h-4 flex items-center justify-center m-auto cursor-pointer"
        >
          <CloseComponent placement="grey" />
        </button>
        <div className="w-[80px] h-[80px] flex items-center justify-center">
          <Image
            src={`/${product.image}`}
            alt={product.name}
            width={66}
            height={66}
            className="object-contain"
          />
        </div>
        <Link
          href={`/products/${product.id}`}
          className="text-[14px] flex items-center w-32 sm:w-44 "
        >
          {product.name}
        </Link>
      </div>

      <div className="w-64 h-8">
        <div
          className="flex justify-between sm:justify-start items-center sm:gap-6
          h-full"
        >
          <div className="flex items-center w-24">
            {/* 5. Кнопки +/- тепер відправляють actions `decrement/incrementQuantity` */}
            <button
              className={`w-8 h-8 flex items-center justify-center 
                border rounded-[48px] border-light-theme-border-color dark:border-dark-theme-border-color 
                text-light-theme-border-active dark:text-dark-theme-border-hover
                ${quantity === 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              onClick={() => dispatch(decrementQuantity(product.itemId))}
              disabled={quantity === 1}
            >
              {quantity === 1 ?
                <MinusComponent placement="grey" />
              : <MinusComponent />}
            </button>
            <span className="w-8 h-8 flex items-center justify-center">
              {quantity}{' '}
              {/* <-- 6. Відображаємо кількість з пропсів (з Redux) */}
            </span>
            <button
              className="w-8 h-8 flex items-center justify-center 
                border dark:border-0 rounded-[48px] border-light-theme-border-active 
                text-black dark:text-dark-theme-text 
                bg-white dark:bg-dark-theme-btn-selected 
                cursor-pointer"
              onClick={() => dispatch(incrementQuantity(product.itemId))}
            >
              <PlusComponent />
            </button>
          </div>
          <span
            className="flex justify-end sm:w-20
            text-light-theme-text dark:text-dark-theme-text leading-[1.4] tracking-normal font-bold text-[22px]"
          >
            {/* 7. Розраховуємо ціну на основі кількості з Redux */}$
            {product.price * quantity}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
