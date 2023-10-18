import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../slices/themeSlice";
import searchSlice from "../slices/searchSlice";

const appStore = configureStore({
  reducer: {
    theme: themeSlice,
    search: searchSlice,
  },
});

export default appStore;
