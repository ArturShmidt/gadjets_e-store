import React from 'react';
import CategoryBreadcrumb from './CategoryBreadcrumb';
import CategoryHeading from './CategoriesHeading';
import CartHeading from '@/components/UI/ShoppingCartIcons/CartHeading';
import { CategoryName } from '@/types/CategoryName';

type Props = {
  isCart?: true;
  isFavorites?: true;

  categoryName: CategoryName;
  total: number;
};
const CategoryHeader: React.FC<Props> = ({
  isCart,
  isFavorites,
  categoryName,
  total,
}) => {
  return (
    <>
      {!isCart ?
        <>
          <CategoryBreadcrumb categoryName={categoryName} />
          {isFavorites ?
            <CategoryHeading
              categoryName={categoryName}
              total={total}
              isFavorites
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
