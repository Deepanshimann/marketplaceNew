import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CarouselData from './CarouselData';

// Responsive settings for AliceCarousel
const responsive = {
    0: { items: 1 }, // Always show one item on all breakpoints
};

const Firstpage = () => {
    const items = CarouselData.map((item, index) => (
        // Use a wrapper div to control the aspect ratio and size
        <div key={index} className="max-w-screen-lg mx-auto overflow-hidden" style={{ height: '500px' }}>
            <img src={item.image} alt={`Slide ${index}`} className="w-full h-full object-cover"/>
        </div>
    ));

    return (
        <AliceCarousel
            autoPlay
            autoPlayInterval={3000}
            mouseTracking
            infinite
            items={items}
            responsive={responsive}
            controlsStrategy="responsive" // Adjusts control strategies for different devices
        />
    );
}

export default Firstpage;
