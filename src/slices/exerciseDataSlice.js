import { createSlice } from "@reduxjs/toolkit";

const exerciseDataSlice = createSlice({
  name: "exercise",
  initialState: {
    allExercises: null,
    filteredExercises: null,
    allBodyParts: null,
    macrosFormFilledData: null,
    userMacroProfile: null,
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

    addMacrosFormData: (state, action) => {
      state.macrosFormFilledData = action.payload;
    },
    addUserMacroProfile: (state, action) => {
      state.userMacroProfile = action.payload;
    },
  },
});

export const {
  addAllExerciseData,
  searchedExercise,
  addBodyPartsData,
  addMacrosFormData,
  addUserMacroProfile,
} = exerciseDataSlice.actions;
export default exerciseDataSlice.reducer;
