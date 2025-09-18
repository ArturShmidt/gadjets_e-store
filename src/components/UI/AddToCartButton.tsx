'use client';

import { useDispatch } from 'react-redux';
import { addItem } from '@/lib/features/cart/cartSlice';
import { Product } from '@/types/product';

export default function AddToCartButton({ product }: { product: Product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return <button onClick={handleAddToCart}>Add to cart</button>;
}
