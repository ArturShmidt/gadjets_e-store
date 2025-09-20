import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/types/product';
import { CategoryName } from '@/types/CategoryName';

interface favouritesState {
  items: Product[];
}

const initialState: favouritesState = {
  items: [],
};

const favouritesSlice = createSlice({
  name: CategoryName.Favourites,
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Product>) => {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (existingIndex >= 0) {
        // Якщо товар вже в обраному, видаляємо його
        state.items.splice(existingIndex, 1);
      } else {
        // Якщо товару немає, додаємо його
        state.items.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
