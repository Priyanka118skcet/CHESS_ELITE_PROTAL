import React, { useState, useEffect } from "react";
import "../../styles/chart/Chart.css"; // Import CSS file for styling


import s1 from '../../pictures/s1.jpg';
import s9 from '../../pictures/s9.avif';
import s3 from '../../pictures/s3.avif';
import s14 from '../../pictures/s14.jpg';
import s12 from '../../pictures/s12.jpg';

const ImageGrid = () => {
  // Define an array of image URLs
  const images = [
     s1,
    s9,
    s3,
    s14,
    s12,
    // Add more image URLs as needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Function to update the current image index
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };

    // Interval for changing the image (every 3 seconds)
    const interval = setInterval(nextImage, 3000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="image-grid">
      {/* Display the current image */}
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="slideshow-image"
      />
    </div>
  );
};

export default ImageGrid;
