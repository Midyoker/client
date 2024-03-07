import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero-container">
      <h1 className="hero-heading">TERRAIN RECOGNITION SYSTEM USING DEEP LEARNING</h1>
      <div className='hero-box'>
        <div className='hero-image-container'>
          <img src="./mountain.png" alt="Terrain" className="hero-image" width={20} height={350} />
        </div>
        <p className="hero-text">This is a project that uses deep learning to recognize terrain from images. The project is built using a full stack web application. The front end is built using React and the back end is built using Flask. The deep learning model is built using TensorFlow and Keras. The model is trained on a dataset of images of different terrains. The model is then used to predict the terrain in an image uploaded by the user. The user can also view the statistics of the model and the dataset. The user can also view the members of the team that built the project.</p>
      </div>
    </div>
  );
}

export default Hero;