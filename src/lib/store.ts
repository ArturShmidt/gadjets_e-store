// src/lib/store.ts

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '@/lib/features/api/apiSlice';
import favoritesReducer from '@/lib/features/favorites/favoritesSlice';
import cartReducer from '@/lib/features/cart/cartSlice';

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Використовує localStorage за замовчуванням

// 1. Об'єднуємо редюсери, які ми хочемо зберігати (favorites та cart)
const persistedReducers = combineReducers({
  favorites: favoritesReducer,
  cart: cartReducer,
});

// 2. Створюємо конфігурацію для persist
const persistConfig = {
  key: 'root', // Ключ для localStorage
  storage,
  whitelist: ['favorites', 'cart'], // Вказуємо, які саме слайси зберігати
};

// 3. "Огортаємо" наші редюсери в persistReducer
const persistedReducer = persistReducer(persistConfig, persistedReducers);

// 4. Створюємо стор
export const makeStore = () => {
  return configureStore({
    reducer: {
      // API slice не потрібно зберігати, він керує кешем
      [apiSlice.reducerPath]: apiSlice.reducer,
      // Тут будуть знаходитись наші збережені дані
      persisted: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        // redux-persist вимагає ігнорувати деякі екшени для серіалізації
        serializableCheck: {
          ignoredActions: [
            'persist/PERSIST',
            'persist/REHYDRATE',
            'FLUSH',
            'REHYDRATE',
            'PAUSE',
            'PERSIST',
            'PURGE',
            'REGISTER',
          ],
        },
      }).concat(apiSlice.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
