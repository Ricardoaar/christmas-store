import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortBy: "name",
  sortDirection: "asc",
  filter: "",
  page: 1,
  pageSize: 10,
  layout: "card"
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setSortDirection: (state, action) => {
      state.sortDirection = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
    setLayout: (state, action) => {
      state.layout = action.payload;
    },
    reset: () => initialState
  }
});

export const { reducer: appReducer } = appSlice;

export default appSlice;
