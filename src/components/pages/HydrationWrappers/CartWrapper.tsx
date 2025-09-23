import React from 'react';
import Cart from '../Cart/Cart';
import { HydrationProvider } from '@/lib/HydrationProvider';

export default function CartWrapper() {
  return (
    <HydrationProvider>
      <Cart />
    </HydrationProvider>
  );
}
