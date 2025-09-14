import React from 'react';
import ProductCart from './ProductCart';

// тупий компонент, що просто прийматиме вже готовий(відсортований і тд) список товарів і відображатиме його.

const ProductList = () => {
  return (
    <>
      <div>ProductList</div>
      <div className="flex flex-wrap">
        {/* .map по списку, видаючи ліст з ProductCart */}
        {/* просто створення масиву від 0 до 4, і мапінг товарів для прикладу */}
        {/* класи рендерять по 2 товари на сторінку вихідно */}

        {Array.from({ length: 5 }, (_, index) => index).map((el) => (
          <div
            className="w-full md:w-1/3 lg:w-1/4"
            key={el}
          >
            <ProductCart />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
