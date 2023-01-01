import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersData } from "./actions";

const productsSlice = createSlice({
  name: "users",
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

export default productsSlice;
