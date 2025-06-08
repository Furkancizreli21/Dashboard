import { configureStore } from "@reduxjs/toolkit";
import customersSlice from "./slices/customersSlice";
export const store = configureStore({
  reducer: {
    customers: customersSlice,
  },
});
