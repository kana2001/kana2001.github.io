import React, { useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { ChakraProvider } from '@chakra-ui/react'
import DarkModeButton from './components/DarkModeButton';
import Switch from '@mui/material/Switch';
import { FormControlLabel } from '@mui/material';

function App() {
  const [darkMode, setDarkMode] = useState(false); // starts in light mode

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (

    <Router>
      <div className={`App ${darkMode ? 'dark' : 'light'}`}>
        <div className="header">
          <nav>
            <Link to="/">Work Experience</Link> |
            <Link to="/about">About Me</Link>
            {/* <button onClick={toggleDarkMode}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button> */}

            {/* <DarkModeButton></DarkModeButton> */}

            {/* TODO: Fix font of dark mode */}
            <FormControlLabel
              value="bottom"
              control={<Switch onChange={toggleDarkMode} />}
              label="Dark Mode"
              labelPlacement="bottom"
            />

          </nav>
          <h1>Hello, I'm Adi.</h1>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              'Aspiring Full Stack Developer',
              1000,
              'Basketball Fanatic',
              1000,
              'Upcoming Engineering Graduate',
              1000,
            ]}
            speed={50}
            style={{ fontSize: '2em' }}
            repeat={Infinity}
          />


        </div>

        <div className="content">
          <Routes>
            <Route path="/" element={<WorkExperience />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </div>

        <div className="contact">
          <h2>Contact Me</h2>
          <p>Email: your.email@example.com</p>
          <p>LinkedIn: [Your LinkedIn Profile]</p>
        </div>
      </div>
    </Router>

  );
}

export default App;
