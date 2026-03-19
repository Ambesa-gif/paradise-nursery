import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {}
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      if (!state.items[item.id]) {
        state.items[item.id] = { ...item, quantity: 1 };
      }
    },
    increase: (state, action) => {
      state.items[action.payload].quantity++;
    },
    decrease: (state, action) => {
      if (state.items[action.payload].quantity > 1) {
        state.items[action.payload].quantity--;
      }
    },
    remove: (state, action) => {
      delete state.items[action.payload];
    }
  }
});

export const { addToCart, increase, decrease, remove } = CartSlice.actions;
export default CartSlice.reducer;