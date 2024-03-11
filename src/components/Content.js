import React, { useState } from 'react';
import axios from 'axios';
import './Content.css';

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setFileName(file ? file.name : ''); // Handle the case when file is not selected
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

      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Image uploaded successfully:', response.data);
      // Handle any further logic after successful upload
    } catch (error) {
      console.error('Error uploading image:', error);
      // Handle error cases
    }
  };

  return (
    <div className="header-container">
      <div className='content-box'>
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
    </div>
  );
};

export default ImageUploader;