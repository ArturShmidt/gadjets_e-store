import { CategoryName } from '@/types/CategoryName';
import { usePathname } from 'next/navigation';

export function useIsFavoritesPage() {
  const pathname = usePathname();
  return pathname === `/${CategoryName.Favourites}`;
}
