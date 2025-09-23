'use client';
import React from 'react';
import { CategoryName } from '@/types/CategoryName';
import CategoryHeader from '@/components/UI/CategoryHeader';
import { RootState } from '@/lib/store';
import { useSelector } from 'react-redux';
import ProductCart from '@/components/Products/ProductCart';
import { Product } from '@/types/product';
import { useGetProductsQuery } from '@/lib/features/api/apiSlice';
import ActionButton from '@/components/UI/ActionButton';

const Favourites: React.FC = () => {
  const { data: allProducts, isLoading, isError } = useGetProductsQuery();
  const favouritesItems = useSelector(
    (state: RootState) => state.persisted.favourites.items,
  );

  if (isLoading) {
    return <div>Loading favourites...</div>;
  }

  const detailedFavouritesItems = favouritesItems
    .map((id) => {
      const product = allProducts?.find((p) => p.itemId === id);
      return product ? { id, product } : null;
    })
    .filter((item): item is { id: string; product: Product } => item !== null);

  if (detailedFavouritesItems.length === 0) {
    return (
      <div className=" mx-4 sm:mx-6 lg-max:mx-8 flex justify-center items-center flex-col py-20 dark:bg-dark-theme-bg">
        <h1 className="text-[32px] sm:text-[48px] font-[800] text-light-theme-text dark:text-dark-theme-text mb-4">
          Your favourites list is empty
        </h1>
        <p className="text-light-theme-text-menu dark:text-text-gray mb-8">
          Looks like you haven&apos;t added anything yet.
        </p>
        <ActionButton name="Start Shopping" />
      </div>
    );
  }

  return (
    <>
      <div className="pt-6 px-4 sm:px-8">
        <CategoryHeader
          categoryName={CategoryName.Favourites}
          total={detailedFavouritesItems.length}
          isFavourites
        />
      </div>

      <div
        className="grid 
          grid-cols-1
          sm:grid-cols-2 
          md:grid-cols-3 
          lg-max:grid-cols-4 
          gap-x-4 
          gap-y-10
          justify-items-center
          mt-8 mb-14 sm:mt-10 sm:mb-16 lg-max:mb-20"
      >
        {detailedFavouritesItems.map((item) => {
          return (
            <div key={item.id}>
              <ProductCart product={item.product} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Favourites;
