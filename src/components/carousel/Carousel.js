import React, { useState, useEffect } from 'react';
import "./Carousel.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


function Carousel() {
  const image1 = "https://www.tajhotels.com/content/dam/gateway/hotels/Nadesar-Palace-Grounds,Varanasi/images/stay/Luxury-Room-1.jpg";
  const image2 = "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800";
  const image3 = "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800";
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3]; // Replace with your image URLs

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="carousel">
    <FontAwesomeIcon icon={faAngleLeft} className="left-arrow" onClick={prevSlide} />
    <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-img" />
    <FontAwesomeIcon icon={faAngleRight} className="right-arrow" onClick={nextSlide} />
  </div>
  );
}

export default Carousel;
