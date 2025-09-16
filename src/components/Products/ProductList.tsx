import React from 'react';
import ProductCart from './ProductCart';
import products from '@public/api/products.json';

const ProductList = () => {
  return (
    <>
      <div>ProductList</div>
      <div className="flex flex-wrap">
        {products.map((product) => (
          <div
            className="w-full md:w-1/3 lg:w-1/4"
            key={product.id}
          >
            <ProductCart product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
