'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/store';
import { toggleFavorite } from '@/lib/features/favourites/favouritesSlice';
import { Product } from '@/types/product';
import AnimatedHeartIcon from '../UI/AnimatedHeartIcon';

export default function FavoriteButton({ product }: { product: Product }) {
  const dispatch = useDispatch();

  const isFavorite = useSelector((state: RootState) =>
    state.persisted.favourites.items.some((item) => item.id === product.id),
  );

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(product));
  };

  return (
    <button onClick={handleToggleFavorite}>
      <AnimatedHeartIcon isActive={isFavorite} />
    </button>
  );
}
