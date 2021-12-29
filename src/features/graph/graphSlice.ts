import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export interface GraphState {
  equation: number; // tangent line equation
}

const initialState: GraphState = {
  equation: 0
};

export const graphSlice = createSlice({
  name: "equation",
  initialState,
  reducers: {
    redefine: (state, action: PayloadAction<number>) => {
      state.equation = Math.sin(action.payload);
    },
  },
});

export const { redefine } = graphSlice.actions;

export const selectEquation = (state: RootState) => state.graph.equation; // this is GraphState.equation

export default graphSlice.reducer;
