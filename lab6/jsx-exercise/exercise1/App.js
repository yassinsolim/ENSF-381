import React from 'react';
import './App.css';

function App() {
  // Create a variable for the current year using JavaScript's Date() method.
  const currentYear = new Date().getFullYear();

  // Set a boolean variable for user login status.
  const isLoggedIn = false; 

  return (
    <div className="App">
      {/* Heading element */}
      <h1>ENSF-381: Full Stack Web Development</h1>

      {/* Paragraph with static text */}
      <p>React Components</p>

      {/* Paragraph displaying the current year */}
      <p>{currentYear}</p>

      {/* Conditionally render a message using a ternary operator */}
      <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>
    </div>
  );
}

export default App;
