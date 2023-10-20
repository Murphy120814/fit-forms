import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isSingInPageOpen: true,
    isHideNavBarLinks: true,
    isWantToCreateAccount: false,
  },
  reducers: {
    setIsSignInPageOpen: (state, action) => {
      state.isSingInPageOpen = action.payload;
    },

    setIsHideNavBarLinks: (state, action) => {
      state.isHideNavBarLinks = action.payload;
    },

    setIsWantToCreateAccount: (state, action) => {
      state.isWantToCreateAccount = action.payload;
    },
  },
});

export const {
  setIsSignInPageOpen,
  setIsHideNavBarLinks,
  setIsWantToCreateAccount,
} = authSlice.actions;
export default authSlice.reducer;
