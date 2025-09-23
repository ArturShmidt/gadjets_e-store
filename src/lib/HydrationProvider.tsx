// src/lib/HydrationProvider.tsx
'use client';

import { PersistGate } from 'redux-persist/integration/react';
import { usePersistor } from './StoreProvider';
import { PropsWithChildren, ReactNode } from 'react';
import AppleLoader from '@/components/UI/loader/Loader';

type HydrationProviderProps = PropsWithChildren<{
  loading?: ReactNode;
}>;

export function HydrationProvider({
  children,
  loading = <AppleLoader />,
}: HydrationProviderProps) {
  const persistor = usePersistor();

  return (
    <PersistGate
      loading={loading}
      persistor={persistor}
    >
      {children}
    </PersistGate>
  );
}
