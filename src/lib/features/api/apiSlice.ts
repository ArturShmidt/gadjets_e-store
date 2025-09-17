import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product as ProductSummary } from '@/types/product';
import { ProductType as ProductDetails } from '@/types/ProductType';

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
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = apiSlice;
