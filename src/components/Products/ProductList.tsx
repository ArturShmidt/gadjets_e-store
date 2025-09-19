// #region Imports

import React, { useState } from 'react';
import ProductCart from './ProductCart';
import { Product } from '@/types/product';
import { Pagination } from '../UI/pagination/Pagination';
import { ItemsPerPageOption } from '@/types/ItemsPerPageOption';
import { SortOption } from '@/types/SortOption';
import CategorySortSelectors from './CategorySortSelectors';

// #endregion

// тупий компонент, що просто прийматиме вже готовий(відсортований і тд) список товарів і відображатиме його.
interface ProductListProps {
  productlist: Product[];
  total: number;
}

const ProductList = ({ productlist, total }: ProductListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(ItemsPerPageOption.Sixteen);
  const [sortBy, setSortBy] = useState(SortOption.Newest);
  const listRef = React.useRef<HTMLDivElement>(null);

  const sortedProducts = [...productlist].sort((a, b) => {
    switch (sortBy) {
      case SortOption.Newest:
        return b.year - a.year;
      case SortOption.Oldest:
        return a.year - b.year;
      case SortOption.Expensive:
        return b.price - a.price;
      case SortOption.Cheapest:
        return a.price - b.price;
      default:
        return 0;
    }
  });

  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentItems = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);

  // Scroll to top of product list on page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setTimeout(() => {
      if (listRef.current) {
        listRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 0);
  };

  return (
    <>
      <CategorySortSelectors
        perPage={perPage}
        setPerPage={setPerPage}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <div
        ref={listRef}
        className="grid 
          grid-cols-1
          sm:grid-cols-2 
          md:grid-cols-3 
          lg-max:grid-cols-4 
          gap-x-4 
          gap-y-10
          justify-items-center"
      >
        {/* .map по списку, видаючи ліст з ProductCart */}
        {/* просто створення масиву від 0 до 4, і мапінг товарів для прикладу */}
        {/* класи рендерять по 2 товари на сторінку вихідно */}

        {currentItems.map((el) => (
          <div key={el.id}>
            <ProductCart product={el} />
          </div>
        ))}
      </div>
      <Pagination
        total={total}
        perPage={perPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default ProductList;
