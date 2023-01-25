import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../redux/product/productSlice";
import CommonReducer from "../redux/common/commonSlice";

export const store = configureStore({
  reducer: {
    product: ProductReducer,
    common: CommonReducer,
  },
});
