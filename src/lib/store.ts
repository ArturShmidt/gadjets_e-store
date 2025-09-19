// src/lib/store.ts

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '@/lib/features/api/apiSlice';
import favoritesReducer from '@/lib/features/favorites/favoritesSlice';
import cartReducer from '@/lib/features/cart/cartSlice';

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { CategoryName } from '@/types/CategoryName';

const persistedReducers = combineReducers({
  favorites: favoritesReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [CategoryName.Favourites, CategoryName.Cart],
};

const persistedReducer = persistReducer(persistConfig, persistedReducers);

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      persisted: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [
            'persist/PERSIST',
            'REHYDRATE',
            'FLUSH',
            'PAUSE',
            'PURGE',
            'REGISTER',
          ],
        },
      }).concat(apiSlice.middleware),
  });

  // Створюємо persistor тут і повертаємо його разом зі стором
  const persistor = persistStore(store);
  return { store, persistor };
};

// Оновлюємо типи
type AppStoreType = ReturnType<typeof makeStore>['store'];
export type RootState = ReturnType<AppStoreType['getState']>;
export type AppDispatch = AppStoreType['dispatch'];
