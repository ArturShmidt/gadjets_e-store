import { Product } from '@/types/product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  productId: string;
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
    // addItem тепер приймає короткий тип Product
    addItem: (state, action: PayloadAction<Product>) => {
      // Використовуємо `itemId` з короткого типу
      const existingItem = state.items.find(
        (item) => item.productId === action.payload.itemId,
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        // В стан зберігаємо лише ID та кількість
        state.items.push({ productId: action.payload.itemId, quantity: 1 });
      }
    },
    // Переконайтесь, що інші редюсери також працюють з `productId` типу string
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.productId !== action.payload,
      );
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(
        (item) => item.productId === action.payload,
      );
      if (item) item.quantity++;
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(
        (item) => item.productId === action.payload,
      );
      if (item && item.quantity > 1) item.quantity--;
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
