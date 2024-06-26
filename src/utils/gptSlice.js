import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    shouldGptSearch: false,
    movieSuggestions: null,
  },
  reducers: {
    toggleShouldGptSearch: (state) => {
      state.shouldGptSearch = !state.shouldGptSearch;
    },
    addMovieSuggestions: (state, action) => {
      state.movieSuggestions = action.payload;
    },
    deleteMovieSuggestions: (state) => {
      state.movieSuggestions = null;
    },
  },
});

export const {
  toggleShouldGptSearch,
  addMovieSuggestions,
  deleteMovieSuggestions,
} = gptSlice.actions;
export default gptSlice.reducer;
