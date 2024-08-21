import React, { useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import './Footer.css';
import { Link } from 'react-router-dom';
import { FeedbackModal } from '../Feedback/FeedbackModal';  // Assuming you've created a FeedbackModal component

const Footer = () => {
    const Year = new Date().getFullYear();
    const [feedbackOpen, setFeedbackOpen] = useState(false);

    const toggleFeedback = () => {
        console.log('Toggling modal:', !feedbackOpen); 
        setFeedbackOpen(!feedbackOpen);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-[#212B39] text-white">
            <div className="absolute top-0 left-0 w-full overflow-hidden">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-40 fill-white">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z">
                    </path>
                </svg>
            </div>

            <div className="container mx-auto pt-20 pb-5 px-5 mt-20">
                <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-20 sm:gap-5">
                    <div className="flex flex-col gap-5">
                        <h2 className="heading text-3xl  mt-20 font-bold text-yellow-200">About Us</h2>
                        <p className="font-sans mr-2 pr-2 my-2 text-white text-xl">At Vintage Store, we're committed to delivering exceptional service and building lasting relationships with our customers.</p>
                    </div>

                    <div className="container flex flex-col gap-5">
                        <h2 className="heading text-3xl font-bold mt-20 text-yellow-200 cursor-pointer" onClick={toggleFeedback}>
                            Feedback
                        </h2>
                        <p className="text-white text-xl">Click on feedback <br />to open the form</p>
                    </div>

                    <div className="container flex flex-col gap-5">
                        <h2 className=" heading  text-3xl font-bold mt-20 text-yellow-200">Customer Support</h2>
                        <ul>
                            <li className="my-2 text-xl text-white">
                                <Link to="/contact-us" onClick={scrollToTop}>Contact Us</Link>
                            </li>
                            <li className="my-2 text-xl text-white">
                                <Link to="/help-center" onClick={scrollToTop}>FAQ</Link>
                            </li>
                            <li className="my-2 text-xl text-white">
                                <Link to="/help-center/return-policy" onClick={scrollToTop}>Return Policy</Link>
                            </li>
                            <li className="my-2 text-xl text-white">
                                <Link to="/help-center" onClick={scrollToTop}>Help Center</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="icon flex flex-col gap-7">
                        <h2 className=" heading text-3xl mt-20 font-bold text-yellow-200">Connect With Us</h2>
                        <div className="flex space-x-4">
                            <div className="icon text-3xl  transform hover:scale-150 transition-all duration-150 ease-in-out" style={{ color: "#FFFFFF" }}>
                                <FaGithub />
                            </div>
                            <div className="icon text-3xl  transform hover:scale-150 transition-all duration-150 ease-in-out">
                                <FaLinkedinIn />
                            </div>
                            <div className="icon text-3xl transform hover:scale-150 transition-all duration-150 ease-in-out">
                                <FaTwitter />
                            </div>
                            <div className="icon text-3xl transform hover:scale-150 transition-all duration-150 ease-in-out">
                                <FaInstagram />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10 text-center">
                    <p className="text-white">&copy; {Year} YourMarketplace. All rights reserved.</p>
                    <p className="text-white">Terms of Service | Privacy Policy</p>
                </div>
            </div>

            {/* Feedback Modal */}
            {feedbackOpen && (
               <FeedbackModal isOpen={feedbackOpen} onClose={toggleFeedback} />
            )}
        </footer>
    );
};

export default Footer;
