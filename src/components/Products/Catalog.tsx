'use client';

import ProductList from './ProductList';
import products from '@public/api/products.json';
import CategoryHeading from './CategoryHeading';

// Smart-компонент, компонент для сортування і іншої роботи з данними.
type CatalogProps = {
  categoryName: string;
};

const Catalog: React.FC<CatalogProps> = ({ categoryName }) => {
  const visibleProducts = products.filter(
    (product) => product.category === categoryName,
  );

  const total = visibleProducts.length;

  return (
    <>
      <CategoryHeading
        categoryName={categoryName}
        total={total}
      />
      <ProductList
        productlist={visibleProducts}
        total={total}
      />
    </>
  );
};

export default Catalog;
