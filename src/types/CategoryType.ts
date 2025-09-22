import { CategoryName } from './CategoryName';

export type CategoryWithCount = {
  id: string;
  name: string;
  count: number;
};

export type DescriptionItem = {
  title: string;
  text: string[];
};

export type ProductType = {
  id: string;
  category: CategoryName;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: DescriptionItem[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera?: string;
  zoom?: string;
  cell: string[];
};

export type ProductData = {
  product: ProductType | null;
  variants: ProductType[];
};
