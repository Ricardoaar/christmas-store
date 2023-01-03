import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./actions";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    entities: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.entities = action.payload;
    });
  }
});
export const { reducer: productsReducer } = productsSlice;
export default productsSlice;
