import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ImageUploader from './components/Content';
import ParallaxScroll from './components/ParallaxScroll';

const App = () => {
  return (
    <Router>
      <div> 
        <Navbar />
        <Routes>
          <Route path="/" element={<ParallaxScroll />} />
          <Route path="/Content" element={<ImageUploader />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
