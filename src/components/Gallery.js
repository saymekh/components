// src/components/Gallery.js
import React from 'react';

function Gallery({ images }) {
  return (
    <div className='gallery-section'>
      <div className='gallery container'>
        <h2 className='sub-head'>Gallery</h2>
        <div className='image-wrapper'>
          {images.map((image, index) => (
            <div key={index} className='image-item'>
              <img 
                className="gallery-image" 
                src={image} 
                alt={`Image ${index + 1}`} 
              />
              <p><span>$50</span></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;