import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import Navbar from './components/Navbar';
import Content from './components/Content';
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <div className='svg-background'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/content" element={<Content />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
