import React from 'react';
import styles from '../styles/DarkModeButton.module.css';
const DarkModeButton = () => {
    return(
        <div className={styles.container}>
            {/* <div className="toggle" onClick={toggleDarkMode}> */}
            <div className="toggle" >
            <span className="icon sun">☀️</span>
            <span className="icon moon">🌙</span>
          </div>
        </div>
    );
};

export default DarkModeButton;
