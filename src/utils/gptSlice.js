import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    shouldGptSearch: false,
  },
  reducers: {
    toggleShouldGptSearch: (state) => {
      state.shouldGptSearch = !state.shouldGptSearch;
    },
  },
});

export const { toggleShouldGptSearch } = gptSlice.actions;
export default gptSlice.reducer;
