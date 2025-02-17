// features/themeSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Function to get the initial dark mode value from localStorage
const getInitialDarkMode = () => {
  const storedDarkMode = localStorage.getItem('darkMode');
  return storedDarkMode === 'true' ? true : false; // Default to light mode if no setting exists
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
