import React from 'react';
import CategoryBreadcrumb from './CategoryBreadcrumb';
import CategoryHeading from './CategoriesHeading';
import CartHeading from '@/components/UI/ShoppingCartIcons/CartHeading';
import { CategoryName } from '@/types/CategoryName';

type Props = {
  isCart?: true;
  isFavourites?: true;

  categoryName: CategoryName;
  total: number;
};
const CategoryHeader: React.FC<Props> = ({
  isCart,
  isFavourites,
  categoryName,
  total,
}) => {
  return (
    <>
      {!isCart ?
        <>
          <CategoryBreadcrumb categoryName={categoryName} />
          {isFavourites ?
            <CategoryHeading
              categoryName={categoryName}
              total={total}
              isFavourites
            />
          : <CategoryHeading
              categoryName={categoryName}
              total={total}
            />
          }
        </>
      : <CartHeading />}
    </>
  );
};

export default CategoryHeader;
