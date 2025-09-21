'use client';

import { useDispatch } from 'react-redux';
import { addItem } from '@/lib/features/cart/cartSlice';
import { Product } from '@/types/product';

export default function AddToCartButton({ product }: { product: Product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <div
      className="h-[35px] w-[80%] flex justify-center items-center
            bg-light-theme-btn-product-bg text-white
            dark:bg-product-add-btn dark:text-text-light
            text-sm leading-[21px]
            rounded-[8px]
            transition-transform duration-500
            hover:shadow-[0_0_13px_0_rgba(23,32,49,0.4)]
            hover:cursor-pointer
            dark:hover:bg-dark-theme-btn-hover
            hover:scale-105"
      onClick={handleAddToCart}
    >
      Add to cart
    </div>
  );
}
