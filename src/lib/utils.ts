import { CategoryName } from '@/types/CategoryName';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// перевіряє чи ми зараз на сторінці корзини
export function isShoppingCartPage(pathname: string) {
  return pathname === '/cart';
}
