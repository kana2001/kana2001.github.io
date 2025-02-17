// features/themeSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Function to get the initial dark mode value from localStorage
const getInitialDarkMode = () => {
  const storedDarkMode = localStorage.getItem('darkMode');
  if (storedDarkMode === 'true') {
    return true;
  } else if (storedDarkMode === 'false') {
    return false;
  } else {
    // No preference in localStorage, check device preference
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    darkMode: getInitialDarkMode(),
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem('darkMode', state.darkMode);
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;

export const selectDarkMode = (state) => state.theme.darkMode;

export default themeSlice.reducer;
