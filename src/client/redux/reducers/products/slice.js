import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersData } from "./actions";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    entities: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsersData.fulfilled, (state, action) => {
      state.entities = action.payload;
    });
  }
});
export const { reducer: productsReducer } = productsSlice;
export default productsSlice;
