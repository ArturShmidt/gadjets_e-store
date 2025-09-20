'use client';
import React from 'react';
import { CategoryName } from '@/types/CategoryName';
import CategoryHeader from '@/components/UI/CategoryHeader';
import { RootState } from '@/lib/store';
import { useSelector } from 'react-redux';

// Need to check in future Mykytoss
const Favourites: React.FC = () => {
  const cartItems = useSelector(
    (state: RootState) => state.persisted.favourites.items,
  );

  return (
    <div className="pt-6 px-4 sm:px-8">
      <CategoryHeader
        categoryName={CategoryName.Favourites}
        total={cartItems.length}
        isFavourites
      />
    </div>
  );
};

export default Favourites;
