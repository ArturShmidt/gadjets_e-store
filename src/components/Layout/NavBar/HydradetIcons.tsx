// src/components/UI/NavBar/HydratedIcons.tsx
'use client';

import { HydrationProvider } from '@/lib/HydrationProvider';
import { IconsSkeleton } from './IconsSkeleton';
import FavouritesLink from '@/components/UI/NavBar/FavouritesLink';
import ShoppingCartLink from '@/components/UI/NavBar/ShoppingCartLink';

type IconsProps = {
  onClose?: () => void;
};

export function HydratedIcons({ onClose }: IconsProps) {
  return (
    <HydrationProvider loading={<IconsSkeleton />}>
      {/* Цей блок буде показано ПІСЛЯ гідратації */}
      <div className="flex h-16 items-center justify-between">
        <FavouritesLink
          isBurger
          onClose={onClose}
        />
        <ShoppingCartLink
          fullWidth
          onClose={onClose}
        />
      </div>
    </HydrationProvider>
  );
}
