import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export interface GraphState {
  t: number; // AKA window.scrollY; called t for use in sine equation
}

const initialState: GraphState = {
  t: 0,
};

export const graphSlice = createSlice({
  name: "t",
  initialState,
  reducers: {
    redefine: (state, action: PayloadAction<number>) => {
      state.t = action.payload;
    },
  },
});

export const { redefine } = graphSlice.actions;

export const selectT = (state: RootState) => state.graph.t; // this is GraphState.equation

export default graphSlice.reducer;
