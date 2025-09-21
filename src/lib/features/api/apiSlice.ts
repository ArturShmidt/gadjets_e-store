import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product as ProductSummary } from '@/types/product';
import {
  CategoryWithCount,
  ProductType as ProductDetails,
} from '@/types/CategoryType';
import { getBestsellers } from '@/lib/services/product.service';
import build from 'next/dist/build';

export const apiSlice = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),

  endpoints: (builder) => ({
    getProducts: builder.query<ProductSummary[], string | void>({
      query: (category) => {
        // Якщо категорію передано, формуємо URL з параметром
        if (category) {
          return `/products?category=${category}`;
        }
        // Якщо ні — повертаємо URL для всіх продуктів
        return '/products';
      },
    }),

    getProductById: builder.query<ProductDetails, string>({
      query: (itemId) => `/products/${itemId}`,
    }),
    // отримати список рекомендований продуктів до IDпродукта
    getRelatedProducts: builder.query<ProductSummary[], string>({
      query: (productId) => `/products/${productId}/related`,
    }),
    // витягнути категорії з кількістю моделей по кожній
    getCategories: builder.query<CategoryWithCount[], void>({
      query: () => '/categories',
    }),
    // товари з найбільшою різницею ціни\скидки
    getBestsellers: builder.query<ProductSummary[], void>({
      query: () => '/products/bestsellers',
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetRelatedProductsQuery,
} = apiSlice;
