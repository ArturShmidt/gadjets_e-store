import React from 'react';
import ProductCart from './ProductCart';
import { Product } from '@/types/product';

// тупий компонент, що просто прийматиме вже готовий(відсортований і тд) список товарів і відображатиме його.
interface ProductListProps {
  productlist: Product[];
}

const ProductList = ({ productlist }: ProductListProps) => {
  return (
    <>
      <div>ProductList</div>
      <div className="flex flex-wrap">
        {/* .map по списку, видаючи ліст з ProductCart */}
        {/* просто створення масиву від 0 до 4, і мапінг товарів для прикладу */}
        {/* класи рендерять по 2 товари на сторінку вихідно */}

        {productlist.map((el) => (
          <div
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            key={el.id}
          >
            <ProductCart product={el} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
