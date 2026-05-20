import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [
    {
      id: 1,
      name: 'Veg Burger',
      price: 120,
      status: 'Available',
      image:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600',
    },
    {
      id: 2,
      name: 'Pizza',
      price: 240,
      status: 'Out of Stock',
      image:
        'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600',
    },
    {
      id: 3,
      name: 'Pasta',
      price: 180,
      status: 'Available',
      image:
        'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?q=80&w=600',
    },
  ],
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload)
    },
  },
})

export const { addProduct } = productSlice.actions
export default productSlice.reducer