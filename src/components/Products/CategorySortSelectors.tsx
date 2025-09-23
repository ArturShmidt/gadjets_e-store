import React from 'react';
import { SortOption } from '@/types/SortOption';
import { ItemsPerPageOption } from '@/types/ItemsPerPageOption';
import SelectArrow from '../UI/SelectArrow';

type Props = {
  perPage: ItemsPerPageOption;
  setPerPage: (value: ItemsPerPageOption) => void;
  sortBy: SortOption;
  setSortBy: (value: SortOption) => void;
};

const CategorySortSelectors: React.FC<Props> = ({
  perPage,
  setPerPage,
  sortBy,
  setSortBy,
}) => {
  return (
    <div className="flex gap-4 pt-8 pb-6">
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
  );
};

export default CategorySortSelectors;
