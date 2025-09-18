'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/store';
import { toggleFavorite } from '@/lib/features/favorites/favoritesSlice';
import { Product } from '@/types/product';

export default function FavoriteButton({ product }: { product: Product }) {
  const dispatch = useDispatch();

  const isFavorite = useSelector((state: RootState) =>
    state.persisted.favorites.items.some((item) => item.id === product.id),
  );

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(product));
  };

  return (
    <button onClick={handleToggleFavorite}>{isFavorite ? '❤️' : '🤍'}</button>
  );
}
