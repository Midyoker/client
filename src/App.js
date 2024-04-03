import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ImageUploader from './Components/Content';
import ParallaxScroll from './Components/ParallaxScroll';

const App = () => {
  return (
    <Router>
      <div> 
        <Navbar />
        <div className='new'><p>
          hello</p></div>
        <Routes>
          <Route path="/" element={<ParallaxScroll />} />
          <Route path="/Content" element={<ImageUploader />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
