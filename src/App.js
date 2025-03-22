import React, { useEffect } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import DarkModeToggle from './components/DarkModeToggle';
import { useSelector } from 'react-redux';
import { selectDarkMode } from './features/themeSlice';

function App() {
  const darkMode = useSelector(selectDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (

    <Router>
      <div className={`App ${darkMode ? 'dark' : 'light'}`}>
        <div className="header">
          <nav>
            <Link to="/" style={{ color: darkMode ? 'white' : 'black' }}>Work Experience</Link> |
            <Link to="/about" style={{ color: darkMode ? 'white' : 'black' }}>About Me</Link>

            <DarkModeToggle />

          </nav>
          <h1>Hello, I'm Adi.</h1>
          <span className="type-animation-container">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              'I am a Developer',
              5000,
              'I create innovative solutions',
              5000,
              'I build efficient, scalable code',
              5000,
              'I am a lifelong learner',
              5000,
            ]}
            speed={50}
            style={{ fontSize: '1.5em' }}
            repeat={Infinity}
          />
          </span>


        </div>

        <div className="content">
          <Routes>
            <Route path="/" element={<WorkExperience />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </div>

        <div className={`contact ${darkMode ? 'dark' : 'light'}`}>
          <h2>Contact Me</h2>
          <a href="mailto:adityakana@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/aditya-wiwekananda/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/kana2001" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </Router>

  );
}

export default App;
