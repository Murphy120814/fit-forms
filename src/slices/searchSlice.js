import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    searchInput: (state, action) => {
      return action.payload;
    },
  },
});

export const { searchInput } = searchSlice.actions;
export default searchSlice.reducer;
