import React from 'react';
import './videos.css'
const Loginvedio = () => {
  return (
    <div className="video-section">
      <h2>How to Login and Sign Up</h2>
      <p>
        This video tutorial will guide you through the steps to log in or sign up on our platform. Follow along to learn how to easily create an account and access your profile.
      </p>
      <iframe
        width="100%"
        height="500px"
        src="https://www.youtube.com/embed/VCtNv7nT9uk?si=503lewiK93_3jdGP" 
        title="Login and Sign Up Tutorial"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Loginvedio;
