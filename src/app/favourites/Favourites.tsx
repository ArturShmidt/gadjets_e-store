'use client';
import React from 'react';
import { CategoryName } from '@/types/CategoryName';
import CategoryHeader from '@/components/UI/CategoryHeader';
import { RootState } from '@/lib/store';
import { useSelector } from 'react-redux';

const Favourites: React.FC = () => {
  const cartItems = useSelector(
    (state: RootState) => state.persisted.favourites.items,
  );

  return (
    <>
      <div className="pt-6 px-4 sm:px-8">
        <CategoryHeader
          categoryName={CategoryName.Favourites}
          total={cartItems.length}
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
      ></div>
    </>
  );
};

export default Favourites;
