import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export interface ScrollState {
  t: number; // AKA window.scrollY; called t for use in sine equation
}

const initialState: ScrollState = {
  t: 0,
};

export const scrollSlice = createSlice({
  name: "t",
  initialState,
  reducers: {
    redefine: (state, action: PayloadAction<number>) => {
      state.t = action.payload;
    },
  },
});

export const { redefine } = scrollSlice.actions;

export const selectT = (state: RootState) => state.graph.t; // this is ScrollState.t

export default scrollSlice.reducer;
