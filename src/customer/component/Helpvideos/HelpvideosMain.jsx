import React, { useEffect } from 'react';
import gsap from 'gsap';
import './HelpSection.css';

export default function HelpSection() {
  useEffect(() => {
    page2imageAnimation(); // Initialize the animation
  }, []);

  const page2imageAnimation = () => {
    const rightElems = document.querySelectorAll('.right-elem');
    rightElems.forEach((elem) => {
      elem.addEventListener('mouseenter', function () {
        gsap.to(elem.querySelector('img'), {
          opacity: 1,
          scale: 1,
        });
      });
      elem.addEventListener('mouseleave', function () {
        gsap.to(elem.querySelector('img'), {
          opacity: 0,
          scale: 0,
        });
      });
      elem.addEventListener('mousemove', function (dets) {
        gsap.to(elem.querySelector('img'), {
          x: dets.clientX - elem.getBoundingClientRect().x - 90,
          y: dets.clientY - elem.getBoundingClientRect().y - 130,
        });
      });
    });
  };

  return (
    <div id="page4">
      <div id="page4-left">
        <h1>Help & Video Tutorials</h1>
        <h5>
        At Vintage Store, we want to ensure that you have a smooth and enjoyable experience. We’ve created a series of easy-to-follow video tutorials to guide you through the most important features of our platform. Whether you’re just getting started or need help with a specific task, these videos are here to assist you.
        </h5>
      </div>
      <div id="page4-right">
        <div className="right-elem">
          <a href="/login-register-logout-video" className="help-link">
            <h2>How to Login, Register, and Logout</h2>
          </a>
          <img
            src="/images/page 41.jpg" 
            alt="image1"
          />
        </div>
        <div className="right-elem">
          <a href="/create-product-video" className="help-link">
            <h2>How to Create a Product Listing</h2>
          </a>
          <img
            src="/images/page42.jpeg" 
            alt="image2"
          />
        </div>
        <div className="right-elem">
          <a href="/manage-cart-video" className="help-link">
            <h2>Adding Products to Cart, Managing Your Cart, and Adding an Address</h2>
          </a>
          <img
            src="/images/page43.png" 
            alt="image3"
          />
        </div>
        <div className="right-elem">
          <a href="/contact-us-video" className="help-link">
            <h2>What to Do If You Get Stuck & How to Give Feedback</h2>
          </a>
          <img
            src="/images/page44.jpg" 
            alt="image4"
          />
        </div>
      </div>
    </div>
  );
}
