'use client';

import React from 'react';
import ProductList from './ProductList';
// Smart-компонент, компонент для сортування і іншої роботи з данними.
const Catalog = () => {
  // опрацьовуємо список
  return (
    <>
      <div>Catalog</div>
      <ProductList
      // productlist={productlist}
      />
    </>
  );
};

export default Catalog;
