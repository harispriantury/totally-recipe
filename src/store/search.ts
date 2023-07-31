import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type TState = {
  value: string;
};

type Action = {
  type: string;
  payload: string; // Di sini, payload memiliki tipe string karena initialState memiliki properti "value" dengan tipe string.
};

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: ""
  },
  reducers: {
    changeValue: (state: TState, action: Action) => {
      state.value = action.payload;
    }
  }
});

export const { changeValue } = searchSlice.actions;
export const searchValue = (state: RootState) => state.search.value;
export default searchSlice.reducer;
