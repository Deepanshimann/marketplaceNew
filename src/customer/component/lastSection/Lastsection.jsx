import React from 'react';

const Lastsection = () => {
  return (
    <div className="flex flex-col mt-20 md:flex-row items-center bg-white p-8">
      {/* Image on the Left */}
      <div className="w-full md:w-1/3 mb-8 md:mb-0">
        <img 
          src="/images/olderbeautifulwoman.jpg" 
          alt="Category Image" 
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Categories on the Right */}
      <div className="w-full ml-10 md:w-2/3 grid grid-cols-1 bg-slate-800 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Men</h3>
          <ul className="text-gray-600 text-xl">
            <li>T-Shirts</li>
            <li>Jeans</li>
            <li>Jackets</li>
            <li>Suits</li>
            {/* Add more items as needed */}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Women</h3>
          <ul className="text-gray-600 text-xl">
            <li>Dresses</li>
            <li>Tops</li>
            <li>Skirts</li>
            <li>Blouses</li>
            {/* Add more items as needed */}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Kids</h3>
          <ul className="text-gray-600 text-xl">
            <li>T-Shirts</li>
            <li>Pants</li>
            <li>Jackets</li>
            <li>Shorts</li>
            {/* Add more items as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Lastsection;
