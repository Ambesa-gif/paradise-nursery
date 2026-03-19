import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {}
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      if (!state.items[item.id]) {
        state.items[item.id] = { ...item, quantity: 1 };
      }
    },
    removeItem: (state, action) => {
      delete state.items[action.payload];
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      if (state.items[id]) state.items[id].quantity = quantity;
    }
  }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
