import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../slices/themeSlice";
import searchSlice from "../slices/searchSlice";
import exerciseDataSlice from "../slices/exerciseDataSlice";
import authSlice from "../slices/authSlice";
import userInfoSlice from "../slices/userInfoSlice";

const appStore = configureStore({
  reducer: {
    theme: themeSlice,
    search: searchSlice,
    exerciseDb: exerciseDataSlice,
    auth: authSlice,
    userInfo: userInfoSlice,
  },
});

export default appStore;
