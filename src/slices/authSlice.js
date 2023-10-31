import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isSingInPageOpen: true,

    isWantToCreateAccount: false,
    isAuthenticated: false,
  },
  reducers: {
    setIsSignInPageOpen: (state, action) => {
      state.isSingInPageOpen = action.payload;
    },

    setIsWantToCreateAccount: (state, action) => {
      state.isWantToCreateAccount = action.payload;
    },

    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const {
  setIsSignInPageOpen,

  setIsWantToCreateAccount,
  setIsAuthenticated,
} = authSlice.actions;
export default authSlice.reducer;
