import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Features/auth/authSlice'
import productReducer from '../Features/products/productSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
  },
})