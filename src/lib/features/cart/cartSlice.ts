import { ProductType as Product } from '@/types/CategoryType';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.id,
      );
      if (existingItem) {
        // Якщо товар вже в кошику, збільшуємо кількість
        existingItem.quantity++;
      } else {
        // Якщо ні, додаємо новий товар з кількістю 1
        state.items.push({ product: action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      // ID товару для видалення
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload,
      );
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      // ID товару
      const item = state.items.find(
        (item) => item.product.id === action.payload,
      );
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      // ID товару
      const item = state.items.find(
        (item) => item.product.id === action.payload,
      );
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
