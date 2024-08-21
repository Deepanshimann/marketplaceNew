import React from 'react';
import './videos.css'
const Addcartvedio = () => {
  return (
    <div className="video-section">
      <h2>How to Add Items to Cart and Manage Your Cart</h2>
      <p>
        This video explains how to add items to your cart, manage your cart, and proceed to checkout. Follow these simple steps to ensure a smooth shopping experience.
      </p>
      <iframe
        width="100%"
        height="500px"
        src="https://www.youtube.com/embed/Kestzua8hFA"
        title="Add to Cart and Manage Cart Tutorial"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Addcartvedio;
