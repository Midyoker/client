import React from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <div className='svg-background'>
      <Navbar />
      <Hero />
      <Content />
      {/* Add other components here */}
    </div>
  );
}

export default App;