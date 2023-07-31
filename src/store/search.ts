import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: ""
  },
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { changeValue } = searchSlice.actions;
export const searchValue = (state: RootState) => state.search.value;
export default searchSlice.reducer;
