import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: null,
  reducers: {
    addUserInfo: (state, action) => {
      return action.payload;
    },
    removeUserInfo: (state, action) => {
      return null;
    },
  },
});

export default userInfoSlice.reducer;
export const { addUserInfo, removeUserInfo } = userInfoSlice.actions;
