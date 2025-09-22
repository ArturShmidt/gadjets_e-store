'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/store';
import { toggleFavorite } from '@/lib/features/favourites/favouritesSlice';
import { Product } from '@/types/product';
import AnimatedHeartIcon from '../UI/AnimatedHeartIcon';
import { toast } from 'sonner';

interface FavoriteButtonProps {
  product: Product;
  onClick?: () => void;
}

export default function FavoriteButton({
  product,
  onClick,
}: FavoriteButtonProps) {
  const dispatch = useDispatch();

  const isFavorite = useSelector((state: RootState) =>
    state.persisted.favourites.items.includes(product.itemId),
  );

  const handleToggle = () => {
    const willBeFavorite = !isFavorite;

    dispatch(toggleFavorite(product.itemId));

    if (willBeFavorite) {
      toast(`${product.name} add to favorites`);
    } else {
      toast(`${product.name} removed from favorites`);
    }

    if (onClick) onClick();
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
