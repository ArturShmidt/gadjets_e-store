import { RootState } from '@/lib/store';
import { Product } from '@/types/product';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';
import AlreadyInCart from './AlreadyInCart';
import AddToCartButton from '../Products/AddToCartButton';

interface Props {
  product: Product;
}

export default function AddOrNavToCartButton({ product }: Props) {
  const [isClient, setIsClient] = useState(false);

  const isInCart = useSelector((state: RootState) =>
    state.persisted.cart.items.some(
      (item) => item.productId === product.itemId,
    ),
  );

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && isInCart ?
        <AlreadyInCart />
      : <AddToCartButton
          product={product}
          onClick={() => toast.success(`${product.name} add to cart!`)}
        />
      }
    </>
  );
}
