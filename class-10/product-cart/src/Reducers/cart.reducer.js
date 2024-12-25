import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {}
  },
  reducers: {
    addToCart: (state, action) => {
        state.items[action.payload] = 1;
    },
    removeFromCart: (state, action) => {
        delete state.items[action.payload];
    },
    increaseQty: (state, action) => {
        state.items[action.payload] += 1;
    },
    decreaseQty: (state, action) => {
        state.items[action.payload] -= 1;
    },
    updateQty:  (state, action) => {
        const productId = action.payload.productID;
        const finalCount = action.payload.value;
        state.items[productId] = Number(finalCount);
    },
  }
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, increaseQty, decreaseQty, updateQty } = cartSlice.actions

export default cartSlice.reducer