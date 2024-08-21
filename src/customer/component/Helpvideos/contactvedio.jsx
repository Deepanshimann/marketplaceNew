import React from 'react';
import './videos.css'

const Contactvedio = () => {
  return (
    <div className="video-section">
      <h2>How to Contact Us</h2>
      <p>
        If you need assistance, this video will show you how to reach out to us. Whether you have questions or need support, we'll guide you on the best ways to get in touch.
      </p>
      <iframe
        width="100%"
        height="500px"
        src="https://www.youtube.com/embed/XC22nTKbVhg"
        title="Contact Us Tutorial"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* New Video Section for Feedback */}
      <div className="feedback-section">
        <h2>How to Provide Feedback</h2>
        <p>
          We value your feedback! This video will guide you on how to provide feedback on our platform. Your input helps us improve our services and better meet your needs.
        </p>
        <iframe
          width="100%"
          height="500px"
          src="https://www.youtube.com/embed/5fnHA5yj0Eg?si=wV-2rsCHsbzjFNm6"
          title="Feedback Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Contactvedio;
