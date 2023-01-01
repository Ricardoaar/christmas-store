import { combineReducers } from "redux";
import productsSlice from "@client/redux/reducers/products/slice";

export const combinedReducers = combineReducers({
  products: productsSlice.reducer
});
