'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/store';
import { toggleFavorite } from '@/lib/features/favourites/favouritesSlice';
import { Product } from '@/types/product';
import AnimatedHeartIcon from '../UI/AnimatedHeartIcon';

interface Props {
  product: { itemId: string };
}

export default function FavoriteButton({ product }: { product: Product }) {
  const dispatch = useDispatch();

  const isFavorite = useSelector((state: RootState) =>
    state.persisted.favourites.items.includes(product.itemId),
  );

  const handleToggle = () => {
    dispatch(toggleFavorite(product.itemId));
  };

  return (
    <button
      onClick={handleToggle}
      className="
        bg-white dark:bg-gray-700
        p-2.5 rounded-full
        border border-light-theme-border-active
        hover:border-light-theme-text hover:cursor-pointer
        dark:hover:bg-dark-theme-border-hover dark:hover:border-dark-theme-border-color
        flex items-center justify-center
      "
    >
      <AnimatedHeartIcon isActive={isFavorite} />
    </button>
  );
}
