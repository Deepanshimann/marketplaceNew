import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Circlesection.css'
const CircleSection = () => {
  const navigate = useNavigate();
  const items = [
    { label: 'Gifts For Them', imageUrl: '/images/giftcouple.jpg', link: '/gifts/for-them' },
    { label: 'Gems & Jewels', imageUrl: '/images/jwell.jpeg', link: '/jewels/all' },
    { label: 'Decorative Touches', imageUrl: '/images/maximalist-rainbow-rug-in-living-room.jpg', link: '/decorative-touches/Wall Art' },
    { label: 'Treasures for Little Ones', imageUrl: '/images/grandma.jpg', link: '/treasure-for-little-ones/all' },
  ];
  const handleItemClick = (link) => {
    navigate(link);
  };
  return (
    <div className='section-container text-center pb-36'>
      <h1 className='heading mt-36 pt-9 text-8xl  text-[#252F3F] my-24'>Explore More!</h1>
      <div className="circles grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-10">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => handleItemClick(item.link)}
            className="flex flex-col items-center text-center group"
          >
            <div
              className="w-72 h-72 bg-cover bg-center rounded-full mb-2 transition-transform transform group-hover:scale-105"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            ></div>
            <span className="text-3xl font-semibold">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircleSection;
