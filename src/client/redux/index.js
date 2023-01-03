import { combineReducers } from "redux";
import { appReducer } from "@client/redux/reducers/app/slice";
import { productsReducer } from "@client/redux/reducers/products/slice";

export const combinedReducers = combineReducers({
  products: productsReducer,
  app: appReducer
});
