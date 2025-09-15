'use client';
// #region Imports

import React from 'react';
import cn from 'classnames';

// #endregion

type Props = {
  opened: boolean;
  onOpened: (value: boolean) => void;
};

const Hamburger: React.FC<Props> = ({ opened, onOpened }) => {
  return (
    <div
      className="w-[14px] h-[8.5px] flex flex-col justify-between cursor-pointer "
      onClick={() => onOpened(!opened)}
    >
      <span
        className={cn(
          'h-[1px] w-full bg-light-theme-text-hover  transition-transform duration-300 rounded dark:bg-dark-theme-text',
          { 'rotate-45 translate-y-1.5': opened },
        )}
      />
      <span
        className={cn(
          'h-[1px] w-full bg-light-theme-text-hover transition-opacity duration-300 rounded dark:bg-dark-theme-text',
          { 'opacity-0': opened },
        )}
      />
      <span
        className={cn(
          'h-[1px] w-full bg-light-theme-text-hover transition-transform duration-300 rounded dark:bg-dark-theme-text',
          { '-rotate-45 -translate-y-0.5': opened },
        )}
      />
    </div>
  );
};

export default Hamburger;
