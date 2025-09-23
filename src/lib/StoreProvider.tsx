'use client';

import { createContext, PropsWithChildren, useContext, useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from './store';
import { Persistor } from 'redux-persist';

const PersistorContext = createContext<Persistor | null>(null);

export const usePersistor = () => {
  const context = useContext(PersistorContext);
  if (!context) {
    throw new Error('usePersistor must be used within a StoreProvider');
  }
  return context;
};

type AppStore = ReturnType<typeof makeStore>;

export default function StoreProvider({ children }: PropsWithChildren) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    // Просто викликаємо makeStore один раз, щоб отримати і store, і persistor
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current.store}>
      <PersistorContext.Provider value={storeRef.current.persistor}>
        {children}
      </PersistorContext.Provider>
    </Provider>
  );
}
