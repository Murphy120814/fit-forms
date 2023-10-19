import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isSingInPageOpen: false,
  },
  reducers: {
    setIsSignInPageOpen: (state, action) => {
      state.isSingInPageOpen = action.payload;
    },
  },
});

export const { setIsSignInPageOpen } = authSlice.actions;
export default authSlice.reducer;
