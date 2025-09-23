import React from 'react';
import Favourites from '../Favourites';
import { HydrationProvider } from '@/lib/HydrationProvider';

export default function FavoritesWrapper() {
  return (
    <HydrationProvider>
      <Favourites />
    </HydrationProvider>
  );
}
