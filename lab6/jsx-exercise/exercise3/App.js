import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import EngineeringTopics from './EngineeringTopics';

function App() {
  return (
    <div className="App">
      <Home 
        title="Home Page" 
        description="Welcome to our website." 
      />
      <About 
        title="About Us" 
        description="We are passionate about delivering quality experiences." 
      />
      <Contact 
        title="Contact Us" 
        description="Feel free to reach out to us via email or phone." 
      />
      <EngineeringTopics />
    </div>
  );
}

export default App;
