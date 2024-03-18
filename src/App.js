import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ImageUploader from './Components/Content';
import ParallaxScroll from './Components/ParallaxScroll';

const App = () => {
  return (
    <div> 
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<></>} />
          <Route path="/content" element={<ImageUploader />} /> 
        </Routes>
      </Router>
      <ParallaxScroll />
    </div>
  );
};

export default App;
