// src/lib/StoreProvider.tsx
'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { Persistor } from 'redux-persist'; // Імпортуємо тип
import AppleLoader from '@/components/UI/loader/Loader';

// Тип для нашого ref
type StoreAndPersistor = {
  store: ReturnType<typeof makeStore>['store'];
  persistor: Persistor;
};

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<StoreAndPersistor | null>(null);

  if (!storeRef.current) {
    // Просто викликаємо makeStore один раз, щоб отримати і store, і persistor
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current.store}>
      <PersistGate
        loading={<AppleLoader />}
        persistor={storeRef.current.persistor}
      >
        {children}
      </PersistGate>
    </Provider>
  );
}
