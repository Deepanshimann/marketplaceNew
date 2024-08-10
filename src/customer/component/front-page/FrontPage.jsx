// import React from 'react';
import './FrontPage.css';

const FrontPage = () => {
    return (
        <div className="portfolio-container relative min-h-screen flex items-center justify-center">
            <div className="main mx-auto px-4 sm:px-6 lg:px-8">
                <div className="left text-left">
                    <h1 className="text-5xl font-bold text-white">Welcome to Vintage Store</h1>
                    <h2 className="text-3xl text-teal-400 mt-2">Your Trusted Peer-to-Peer Marketplace</h2>
                    <p className="text-xl mt-4 text-gray-300">Buy, sell, and trade unique items with a community you can trust. Discover hidden treasures and give your pre-loved items a new home.</p>
                    <button className="mt-6 px-5 py-3 border border-white font-gilroy font-bold text-white hover:bg-teal-500 hover:text-black hover:border-teal-500 rounded transition duration-300">CHECK OUT WHAT IS NEW</button>
                </div>
                <div className="right">
                    <div className="portfolio-card">
                        <img src="/images/woman4.jpg" alt="User-centered designs and Agile methods" className="rounded" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrontPage;
