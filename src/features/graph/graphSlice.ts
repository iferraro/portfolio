import functionPlot from "function-plot";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export interface GraphState {
  equation: string;
}

const initialState: GraphState = {
  equation: "x", // this is what the tangent line function evaluates to when t=0
};

export const graphSlice = createSlice({
  name: "equation",
  initialState,
  reducers: {
    redefine: (state, action: PayloadAction<number>) => {
      state.equation = `cos(${action.payload})*(x-${action.payload})+sin(${action.payload})`;
    },
  },
});

export const { redefine } = graphSlice.actions;

export const selectEquation = (state: RootState) => state.graph.equation // this is GraphState.equation

// let contentsBounds = document.body.getBoundingClientRect();
// let width = 800;
// let height = 500;
// let ratio = contentsBounds.width / width;
// width *= ratio;
// height *= ratio;

// const showGraph = async () => {
//   const returnedGraph = await functionPlot({
//     target: "#graph",
//     width,
//     height,
//     yAxis: { domain: [0, 2 * Math.PI] },
//     grid: false,
//     disableZoom: true,
//     data: [
//       {
//         fn: "sin(x)",
//         derivative: {
//           fn: "cos(x)",
//           updateOnMouseMove: true,
//         },
//       },
//     ],
//   });
//   return returnedGraph;
// };

export default graphSlice.reducer;
