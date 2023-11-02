import React, { useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import DarkModeToggle from './components/DarkModeToggle';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode, selectDarkMode } from './features/themeSlice';

function App() {
  const darkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();

  // const toggleDarkMode = () => {
  //   setDarkMode(prevMode => !prevMode);
  // };

  return (

    <Router>
      <div className={`App ${darkMode ? 'dark' : 'light'}`}>
        <div className="header">
          <nav>
            <Link to="/">Work Experience</Link> |
            <Link to="/about">About Me</Link>
            
            <DarkModeToggle/>

          </nav>
          <h1>Hello, I'm Adi.</h1>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              'I am an aspiring Full Stack Developer',
              1000,
              'I am a Basketball Fanatic',
              1000,
              'I am an upcoming Engineering Graduate',
              1000,
            ]}
            speed={50}
            style={{ fontSize: '2em' }}
            repeat={Infinity}
          />


        </div>

        <div className="content">
          <Routes>
            <Route path="/" element={<WorkExperience darkMode={darkMode} />} />
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
