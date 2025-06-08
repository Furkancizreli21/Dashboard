import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customers: [],
};

export const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {},
});

export const {} = customersSlice.actions;
export default customersSlice.reducer;
