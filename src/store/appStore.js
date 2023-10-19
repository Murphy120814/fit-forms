import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../slices/themeSlice";
import searchSlice from "../slices/searchSlice";
import exerciseDataSlice from "../slices/exerciseDataSlice";

const appStore = configureStore({
  reducer: {
    theme: themeSlice,
    search: searchSlice,
    exerciseDb: exerciseDataSlice,
  },
});

export default appStore;
