import React from 'react';
import './App.css';
import SocialProfileWithImage from './components/userProfile';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <div className="header">
          <h1>Your Name</h1>
          <p>Web Developer | Designer | Enthusiast</p>
        </div>

        <SocialProfileWithImage></SocialProfileWithImage>
        <div className="content">
          <h2>About Me</h2>
          <p>
            Hello! I'm Adi. I'm passionate about web development, design, and always eager to learn more and take on new challenges.
          </p>
        </div>

        <div className="contact">
          <h2>Contact Me</h2>
          <p>Email: your.email@example.com</p>
          <p>LinkedIn: [Your LinkedIn Profile]</p>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
