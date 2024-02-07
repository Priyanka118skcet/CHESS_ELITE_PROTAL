import React, { useState, useEffect } from "react";
import "../../styles/chart/Chart.css"; // Import CSS file for styling


import s1 from '../../pictures/s1.jpg';
import s2 from '../../pictures/s2.avif';
import s3 from '../../pictures/s3.avif';
import s4 from '../../pictures/s4.jpg';
import s5 from '../../pictures/s5.jpg';
import s6 from '../../pictures/s6.jpeg';
const ImageGrid = () => {
  // Define an array of image URLs
  const images = [
     s1,
    s2,
    s3,
    s4,
    s5,
    s6,
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
