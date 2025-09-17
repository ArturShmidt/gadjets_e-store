import React from 'react';

interface PaginationProps {
  total: number;
  perPage: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const getNumbers = (start: number, end: number) => {
  const numbers: number[] = [];
  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }
  return numbers;
};

export const Pagination = ({
  total,
  perPage,
  currentPage = 1,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(total / perPage);
  const pages = getNumbers(1, totalPages);

  const handlePageClick = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  if (totalPages <= 1) return null; // якщо сторінок <= 1, пагінація не показується

  return (
    <nav
      aria-label="Pagination"
      className="flex justify-center mt-8"
    >
      <ul className="inline-flex items-center space-x-1">
        {/* Prev */}
        <li>
          <button
            onClick={handlePrevClick}
            disabled={currentPage === 1}
            className={`group p-2 flex justify-center items-center border dark:border-product-add-btn-selected
             w-8 h-8 rounded-full
              ${
                currentPage === 1 ?
                  'dark:bg-none dark:hover:bg-none dark:hover:border-product-add-btn-selected border-light-theme-border-color hover:border-light-theme-border-color'
                : 'hover:border-light-theme-text transition dark:bg-product-add-btn-selected dark:hover:bg-dark-theme-border-hover dark:hover:border-dark-theme-border-hover border-light-theme-border-active'
              }`}
          >
            <svg
              className={`h-5 w-5 ${
                currentPage === 1 ?
                  'dark:text-dark-theme-border-hover text-light-theme-border-active'
                : 'dark:text-dark-theme-text text-light-theme-text'
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M10.0002 11.9999L6 7.99971L10.0025 3.99719"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </li>

        {/* Numbers */}
        {pages.map((page: number) => (
          <li key={page}>
            <button
              onClick={() => handlePageClick(page)}
              className={`px-3 py-1 border hover:border-light-theme-text dark:text-text-light rounded-full
                          ${
                            page === currentPage ?
                              'bg-light-theme-text text-white dark:bg-product-add-btn dark:text-white border-light-theme-text dark:border-product-add-btn'
                            : 'dark:hover:bg-dark-theme-border-color dark:hover:border-dark-theme-border-color dark:text-gray-200 border-light-theme-border-color dark:bg-item-bg dark:border-item-bg '
                          }`}
            >
              {page}
            </button>
          </li>
        ))}

        {/* Next */}
        <li>
          <button
            onClick={handleNextClick}
            disabled={currentPage === totalPages}
            className={`group p-2 flex justify-center items-center border dark:border-product-add-btn-selected
             w-8 h-8 rounded-full
              ${
                currentPage === totalPages ?
                  'dark:bg-none dark:hover:bg-none dark:hover:border-product-add-btn-selected border-light-theme-border-color hover:border-light-theme-border-color'
                : 'hover:border-light-theme-text transition dark:bg-product-add-btn-selected dark:hover:bg-dark-theme-border-hover dark:hover:border-dark-theme-border-hover border-light-theme-border-active'
              }`}
          >
            <svg
              className={`h-5 w-5 ${
                currentPage === totalPages ?
                  'dark:text-dark-theme-border-hover text-light-theme-border-active'
                : 'dark:text-dark-theme-text text-light-theme-text'
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.99984 4.00012L10 8.00029L5.99748 12.0028"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};
