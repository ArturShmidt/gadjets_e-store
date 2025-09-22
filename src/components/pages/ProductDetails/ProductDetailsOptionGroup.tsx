'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Product } from '@/types/product';
import { ProductType } from '@/types/CategoryType';

interface OptionGroupProps {
  paramName: 'color' | 'capacity';
  options: string[];
  product: Product;
  variants: ProductType[];
  children: (
    option: string,
    isActive: boolean,
    href: string,
  ) => React.ReactNode;
}

export default function OptionGroup({
  paramName,
  options,
  product,
  variants,
  children,
}: OptionGroupProps) {
  const router = useRouter();
  const pathname = usePathname();

  const selectedColor = product.color;
  const selectedCapacity = product.capacity;

  return (
    <div className="flex gap-3">
      {options.map((option) => {
        const newColor = paramName === 'color' ? option : selectedColor;
        const newCapacity =
          paramName === 'capacity' ? option : selectedCapacity;

        const foundVariant = variants.find(
          (v) => v.color === newColor && v.capacity === newCapacity,
        );

        const href = foundVariant ? `/products/${foundVariant.id}` : '#';
        const isActive =
          option === (paramName === 'color' ? selectedColor : selectedCapacity);

        return children(option, isActive, href);
      })}
    </div>
  );
}
