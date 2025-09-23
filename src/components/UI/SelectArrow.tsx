import React from 'react';

type Props = {
  className?: string;
};

const SelectArrow: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={`absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 dark:text-text-light pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default SelectArrow;
