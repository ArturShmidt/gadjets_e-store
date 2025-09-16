import React from 'react';
import ProductCart from './ProductCart';
import products from '@public/api/products.json';

const ProductList = () => {
  const product = products[0];

  return (
    <>
      <div>ProductList</div>
      <div className="flex flex-wrap">
        <ProductCart product={product} />
        {/* 
        {products.map((product) => (
          <div
            className="w-full md:w-1/3 lg:w-1/4"
            key={product.id}
          >
            
          </div>
        ))}
        */}
      </div>
    </>
  );
};

export default ProductList;
