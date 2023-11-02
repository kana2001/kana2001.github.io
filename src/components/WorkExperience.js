import React from 'react';
import Experience from './Experience';

function WorkExperience({darkMode}) {
  return (
    <div>
      <h2>Work Experience</h2>
      <p>
        Your work experience content goes here...
      </p>
      <Experience darkMode={darkMode}></Experience>
    </div>
  );
}

export default WorkExperience;
