import ToasterWrapper from '@/components/UI/ToasterWrapper';
import ProductCart from './ProductCart';
import { products } from '@/data/products';

export default function ProductList() {
  return (
    <ToasterWrapper>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product, i) => (
          <ProductCart
            key={product.itemId}
            product={product}
            index={i}
          />
        ))}
      </div>
    </ToasterWrapper>
  );
}
