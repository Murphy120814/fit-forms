import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../slices/themeSlice";

const appStore = configureStore({
  reducer: {
    theme: themeSlice,
  },
});

export default appStore;
