import React, { useState } from 'react';
import './gallery.css';

import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpg';
import image6 from '../../assets/image6.jpg';
import image7 from '../../assets/image7.jpg';

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2, image3, image4, image5, image6, image7]; // Use imported image variables

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery">
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      <div className="button-container">
        <button onClick={prevImage} disabled={currentImageIndex === 0}>Previous</button>
        <button onClick={nextImage} disabled={currentImageIndex === images.length - 1}>Next</button>
      </div>
    </div>
  );
};

export default Gallery;
