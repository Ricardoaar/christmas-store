import appSlice from "@client/redux/reducers/app/slice";

export const {
  setSortBy,
  setSortDirection,
  setFilter,
  setPage,
  setPageSize,
  reset,
  setLayout
} = appSlice.actions;
