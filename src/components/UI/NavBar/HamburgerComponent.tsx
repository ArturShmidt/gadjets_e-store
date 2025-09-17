'use client';
// #region Imports

import React from 'react';
import cn from 'classnames';

// #endregion

type Props = {
  opened: boolean;
  onOpened: (value: boolean) => void;
};

const HamburgerComponent: React.FC<Props> = ({ opened, onOpened }) => {
  return (
    <div
      className="relative w-[14px] h-[10px] flex flex-col justify-between cursor-pointer"
      onClick={() => onOpened(!opened)}
    >
      <span
        className={cn(
          'h-[2px] w-full bg-light-theme-text-hover  transition-transform duration-300 rounded dark:bg-dark-theme-text',
          { 'rotate-45 translate-y-1': opened },
        )}
      />
      <span
        className={cn(
          'h-[2px] w-full bg-light-theme-text-hover transition-opacity duration-300 rounded dark:bg-dark-theme-text',
          { 'opacity-0': opened },
        )}
      />
      <span
        className={cn(
          'h-[2px] w-full bg-light-theme-text-hover transition-transform duration-300 rounded dark:bg-dark-theme-text',
          { '-rotate-45 -translate-y-1': opened },
        )}
      />
    </div>
  );
};

export default HamburgerComponent;
