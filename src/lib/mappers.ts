import { Product } from '@/types/product';
import { ProductType as ProductDetails } from '@/types/CategoryType';
import { CategoryName } from '@/types/CategoryName';

export function mapDetailsToSummary(details: ProductDetails): Product {
  return {
    id: 0,
    itemId: details.id,
    category: details.category as CategoryName,
    name: details.name,
    fullPrice: details.priceRegular,
    price: details.priceDiscount,
    screen: details.screen,
    capacity: details.capacity,
    color: details.color,
    ram: details.ram,
    year: new Date().getFullYear(),
    image: details.images[0],
  };
}
