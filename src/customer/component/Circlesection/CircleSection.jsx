import React from 'react';

const CircleSection = () => {
  const items = [
    { label: 'Gifts For Them', imageUrl: '/images/giftcouple.jpg', link: '#' },
    { label: 'Gems & Jewels', imageUrl: '/images/jwell.jpeg', link: '#' },
    { label: 'Decorative Touches', imageUrl: '/images/maximalist-rainbow-rug-in-living-room.jpg', link: '#' },
    { label: 'Treasures for Little Ones', imageUrl: '/images/grandma.jpg', link: '#' },
  ];

  return (
    <div className='text-center mb-40'>
        <h1 className='mt-20 text-7xl text-[#252F3F] my-20'>Explore More!</h1>
    <div className="flex  px-10 justify-between space-x-5  ">  
      {items.map((item, index) => (
        <a
          href={item.link}
          key={index}
          className="flex flex-col gap-3  mx-2 items-center text-center group"
        >
          <div
            className="w-72 h-72 bg-cover bg-center rounded-full mb-2 transition-transform transform group-hover:scale-105"
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          ></div>
          <span className="text-3xl font-semibold">{item.label}</span>
        </a>
      ))}
    </div>
    </div>
  );
};

export default CircleSection;
