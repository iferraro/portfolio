import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ProjectsState {
  highlighted: number;
  status: "idle" | "loading" | "failed";
}

const initialState: ProjectsState = {
  highlighted: -1,
  status: "idle",
};

export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        clickOn: (state, action: PayloadAction<number>) => {
            state.highlighted = action.payload
        }
    }
})

export default projectsSlice.reducer
