enum SortOption {
  Newest = 'newest',
  Oldest = 'oldest',
  Expensive = 'xpensive',
  Cheapest = 'cheapest',
}

enum ItemsPerPageOption {
  Sixteen = 16,
  ThirtyTwo = 32,
  SixtyFour = 64,
}
import React, { useState } from 'react';
import ProductCart from './ProductCart';
import { Product } from '@/types/product';
import { Pagination } from '../UI/pagination/Pagination';
import { useIsFavoritesPage } from '@/hooks/useIsFavoritesPage';

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
  const isFavoritesPage = useIsFavoritesPage();

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
      {!isFavoritesPage && (
        <div className="flex gap-4 pt-8 pb-6">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="sort"
              className="font-[Mont] font-[700] text-[12px] text-light-theme-text-menu dark:text-text-gray"
            >
              Sort by
            </label>
            <select
              id="sort"
              name="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="w-34 sm:w-47 lg:w-44 bg-light-theme-bg-dark
                 dark:bg-dark-theme-btn-selected px-4 py-2 pr-10
                 font-[Mont] font-[600] text-[14px] leading-[21px]
                 text-light-theme-text dark:text-text-light border
                 border-light-theme-border-active
                 focus:outline-none focus:ring-2 focus:ring-light-theme-border-active
                 bg-[url('/icons/arrow-down.svg')] bg-no-repeat bg-[right_0.75rem_center]
                 dark:border-dark-theme-btn-selected"
            >
              {Object.entries(SortOption).map(([key, value]) => (
                <option
                  key={value}
                  value={value}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="items"
              className="font-[Mont] font-[700] text-[12px] text-light-theme-text-menu dark:text-text-gray"
            >
              Items on page
            </label>
            <select
              id="items"
              name="items"
              value={perPage}
              onChange={(e) => setPerPage(Number(e.target.value))}
              className="w-34 lg:w-32 bg-light-theme-bg-dark
                 dark:bg-dark-theme-btn-selected px-4 py-2 pr-10
                 font-[Mont] font-[600] text-[14px] leading-[21px]
                 text-light-theme-text dark:text-text-light border
                 border-light-theme-border-active
                 focus:outline-none focus:ring-2 focus:ring-light-theme-border-active
                 bg-[url('/icons/arrow-down.svg')] bg-no-repeat bg-[right_0.75rem_center]
                 dark:border-dark-theme-btn-selected"
            >
              {Object.values(ItemsPerPageOption)
                .filter((v) => typeof v === 'number')
                .map((value) => (
                  <option
                    key={value}
                    value={value}
                  >
                    {value}
                  </option>
                ))}
            </select>
          </div>
        </div>
      )}

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
