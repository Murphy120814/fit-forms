import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: localStorage.getItem("color-theme") === "dark",
  reducers: {
    isDark: (state, actions) => {
      return actions.payload;
    },
  },
});

export const { isDark } = themeSlice.actions;
export default themeSlice.reducer;
