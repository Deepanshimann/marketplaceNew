import React from 'react';
import './FrontPage.css';

const FrontPage = () => {
    return (
        <div className="portfolio-container relative min-h-screen flex items-center justify-center">
            <div className="main mx-auto px-4 sm:px-6 lg:px-8">
                <div className="left text-left">
                    <h1 className="text-5xl font-bold text-white">Hi, I'm Laura</h1>
                    <h2 className="text-3xl text-teal-400 mt-2">An UX & Multimedia Designer</h2>
                    <p className="text-xl mt-4 text-gray-300">I'm always trying to bring real value and define problems with my designs. Welcome to my portfolio.</p>
                    <button className="mt-6 px-6 py-3 border border-white text-white hover:bg-teal-500 hover:border-teal-500 rounded transition duration-300">CHECK OUT MY WORK</button>
                </div>
                <div className="right">
                    <div className="portfolio-card">
                        <img src="../../../../public/images/woman4.jpg" alt="User-centered designs and Agile methods" className="rounded" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrontPage;
