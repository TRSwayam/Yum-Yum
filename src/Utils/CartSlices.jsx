import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.card.info.id === action.payload.card.info.id
      );
      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if item exists
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add new item with quantity 1
      }
    },
    decreaseItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.card.info.id === action.payload.card.info.id
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1; // Decrease quantity if more than 1
        } else {
          state.items = state.items.filter(
            (item) => item.card.info.id !== action.payload.card.info.id
          ); // Remove item if quantity is 1
        }
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.card.info.id !== action.payload.card.info.id
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, decreaseItem, removeItem, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
