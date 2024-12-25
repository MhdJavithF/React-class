import { configureStore } from '@reduxjs/toolkit'
import productListReducer  from '../Reducers/productList.reducer'
import cartReducer from '../Reducers/cart.reducer'

export default configureStore({
  reducer: {
    productList : productListReducer,
    cart : cartReducer
  }
})