import functionPlot from "function-plot";
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState, AppThunk} from '../../app/store'

let contentsBounds = document.body.getBoundingClientRect();
let width = 800;
let height = 500;
let ratio = contentsBounds.width / width;
width *= ratio;
height *= ratio;

functionPlot({
  target: "#graph",
  width,
  height,
  yAxis: { domain: [0, 2 * Math.PI] },
  grid: false,
  disableZoom: true,
  data: [
    {
      fn: "sin(x)",
      derivative: {
        fn: "cos(x)",
        updateOnMouseMove: true,
      },
    },
  ],
});