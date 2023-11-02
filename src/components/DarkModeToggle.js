import React from 'react';
import styles from '../styles/DarkModeButton.module.css';
import "react-toggle/style.css"
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode, selectDarkMode } from '../features/themeSlice';
const DarkModeToggle = () => {
  const darkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();

  return (

      <DarkModeSwitch
      // className={styles.reactToggleChecked}
      checked={darkMode}
      onChange={() => dispatch(toggleDarkMode())}
      //   icons={{ checked: "🌙", unchecked: "🔆" }}
      aria-label="Dark mode toggle"
    />

    
  );
};

export default DarkModeToggle
