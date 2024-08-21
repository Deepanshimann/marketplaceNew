import React from 'react';
import './videos.css'
const Productvedio = () => {
  return (
    <div className="video-section">
      <h2>How to Create a Product Listing</h2>
      <p>
        Learn how to create a product listing on our platform. This video will walk you through the process of adding a new product, including setting the price, adding images, and writing descriptions.
      </p>
      <iframe
        width="100%"
        height="500px"
        src="https://www.youtube.com/embed/Gln6ySreiZ0?si=VV7JEr4vBJfPQY9i"
        title="Create Product Listing Tutorial"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Productvedio;
