import { createSlice } from "@reduxjs/toolkit";

const exerciseDataSlice = createSlice({
  name: "exercise",
  initialState: {
    allExercises: null,
    filteredExercises: null,
    allBodyParts: null,
  },
  reducers: {
    addAllExerciseData: (state, action) => {
      state.allExercises = action.payload;
    },
    searchedExercise: (state, action) => {
      state.filteredExercises = action.payload;
    },
    addBodyPartsData: (state, action) => {
      state.allBodyParts = action.payload;
    },
  },
});

export const { addAllExerciseData, searchedExercise, addBodyPartsData } =
  exerciseDataSlice.actions;
export default exerciseDataSlice.reducer;
