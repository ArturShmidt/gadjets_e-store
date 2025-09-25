import React, { useState } from 'react';
import { SortOption } from '@/types/SortOption';
import { ItemsPerPageOption } from '@/types/ItemsPerPageOption';
import SelectArrow from '../UI/SelectArrow';
import { Product } from '@/types/product';

type Props = {
  perPage: ItemsPerPageOption;
  setPerPage: (value: ItemsPerPageOption) => void;
  sortBy: SortOption;
  setSortBy: (value: SortOption) => void;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  productlist: Product[];
};

const CategorySortSelectors: React.FC<Props> = ({
  perPage,
  setPerPage,
  sortBy,
  setSortBy,
  searchTerm,
  setSearchTerm,
  productlist,
}) => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = productlist
    .filter((p) => {
      const terms = searchTerm.toLowerCase().split(/\s+/).filter(Boolean);
      return terms.every((t) => p.name.toLowerCase().includes(t));
    })
    .slice(0, 5);

  const handleSelectSuggestion = (name: string) => {
    setSearchTerm(name);
    setShowSuggestions(false);
  };

  const highlightMatch = (text: string): React.ReactNode => {
    if (!searchTerm) return text;

    const terms = searchTerm.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return text;

    let result: React.ReactNode[] = [text];

    terms.forEach((term) => {
      result = result.flatMap((part, i) => {
        if (typeof part !== 'string') return [part];

        const regex = new RegExp(`(${term})`, 'gi');
        return part.split(regex).map((chunk, j) =>
          regex.test(chunk) ?
            <span
              key={`${i}-${j}`}
              className="font-bold text-blue-600"
            >
              {chunk}
            </span>
          : chunk,
        );
      });
    });

    return <>{result}</>;
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 pt-8 pb-6 w-full">
      {/* Сортування */}
      <div className="flex gap-4">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="sort"
            className="font-[700] text-[12px] text-light-theme-text-menu dark:text-text-gray"
          >
            Sort by
          </label>
          <div className="relative w-34 sm:w-47 lg:w-44">
            <select
              id="sort"
              name="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="w-full appearance-none bg-light-theme-bg-dark
                dark:bg-dark-theme-btn-selected px-4 py-2 pr-10
                font-[600] text-[14px] leading-[21px]
                text-light-theme-text dark:text-text-light border
                border-light-theme-border-active
                focus:outline-none focus:ring-2 focus:ring-light-theme-border-active
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
            <SelectArrow />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="items"
            className="font-[700] text-[12px] text-light-theme-text-menu dark:text-text-gray"
          >
            Items on page
          </label>
          <div className="relative w-34 lg:w-32">
            <select
              id="items"
              name="items"
              value={perPage}
              onChange={(e) => setPerPage(Number(e.target.value))}
              className="w-full appearance-none bg-light-theme-bg-dark
                dark:bg-dark-theme-btn-selected px-4 py-2 pr-10
                font-[600] text-[14px] leading-[21px]
                text-light-theme-text dark:text-text-light border
                border-light-theme-border-active
                focus:outline-none focus:ring-2 focus:ring-light-theme-border-active
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
            <SelectArrow />
          </div>
        </div>
      </div>

      {/*  Пошук */}
      <div className="flex flex-col gap-1 w-full sm:w-1/3 relative">
        <label
          htmlFor="search"
          className="font-[700] text-[12px] text-light-theme-text-menu dark:text-text-gray"
        >
          Search products
        </label>
        <input
          id="search"
          type="text"
          placeholder="Type product name..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowSuggestions(!!e.target.value);
          }}
          onFocus={() => searchTerm && setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          className="w-full px-4 py-2 border border-light-theme-border-active 
            dark:border-dark-theme-btn-selected 
            rounded-md bg-light-theme-bg-dark dark:bg-dark-theme-btn-selected
            text-light-theme-text dark:text-text-light
            focus:outline-none focus:ring-2 focus:ring-light-theme-border-active"
        />
        {/* Dropdown suggestions */}
        {showSuggestions && suggestions.length > 0 && (
          <ul className="absolute top-full left-0 mt-1 w-full bg-white dark:text-text-light border dark:bg-dark-theme-bg border border-gray-300 dark:border-dark-theme-border-color rounded-md shadow-lg z-10 suggestions-list">
            {suggestions.map((s) => (
              <li
                key={s.id}
                onMouseDown={() => handleSelectSuggestion(s.name)} // <-- змінено з onClick на onMouseDown
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-theme-btn-selected"
              >
                {highlightMatch(s.name)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CategorySortSelectors;
