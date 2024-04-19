import React, { useState } from 'react';
import axios from 'axios';
import './Content.css';

const Content = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState('');
  const [prediction, setPrediction] = useState('');
  const [graphUrl, setGraphUrl] = useState('');

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setFileName(file ? file.name : '');
  };

  const handleUploadButtonClick = () => {
    const fileInput = document.getElementById('file-input');
    fileInput.click();
  };

  const handleImageChange = (event) => {
    handleFileInputChange(event);
  };

  const handleImageUpload = async () => {
    try {
      if (!image) {
        console.error('No image selected for upload');
        return;
      }

      const formData = new FormData();
      formData.append('image', image);

      const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Image uploaded successfully:', response.data);
      setPrediction(response.data.prediction);
      setGraphUrl(response.data.graph);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className="content-container">
      <div className="content-box">
        <div className="image-section">
          <div className="uploaded-image-container">
            {image ? (
              <img
                className="uploaded-image"
                src={URL.createObjectURL(image)}
                alt="Uploaded"
                onLoad={() => URL.revokeObjectURL(image)}
              />
            ) : (
              <div className="placeholder-text">Your Image Preview</div>
            )}
          </div>
        </div>
        <div className="upload-section">
          <div className="upload-buttons">
            <input
              id="file-input"
              type="file"
              className="upload-input"
              onChange={handleImageChange}
            />
            <button className="upload-button" onClick={handleUploadButtonClick}>
              Choose Image
            </button>
            {fileName && <div className="file-name">{fileName}</div>}
            <button className="upload-button" onClick={handleImageUpload}>
              Upload
            </button>
          </div>
        </div>
        {prediction && <div className="prediction">{prediction}</div>}
      </div>
      <div className="box-container">
        <div className="box">
          {graphUrl ? (
            <div className="graph-container">
              <img className="graph-image" src={graphUrl} alt="Graph" />
            </div>
          ) : (
            <div className="placeholder-box"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;

