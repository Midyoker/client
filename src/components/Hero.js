import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero-container">
      <h1 className="hero-heading">TERRAIN RECOGNITION SYSTEM USING DEEP LEARNING</h1>
      <div className='hero-box'>
        <div className='hero-image-container'>
          <img src="./mountain.png" alt="Terrain" className="hero-image" width={20} height={450} />
        </div>
        <p className="hero-text">The Terrain Recognition Using Machine Learning project introduces an automated solution for identifying terrains, benefiting autonomous navigation and disaster response. Through rigorous data analysis and model training, it enhances decision-making in dynamic environments. Positioned at the forefront of machine learning and environmental analysis, it sets new industry benchmarks.</p>
      </div>
    </div>
  );
}

export default Hero;