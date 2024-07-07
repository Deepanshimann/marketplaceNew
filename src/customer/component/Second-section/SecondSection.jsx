import React, { useState, useRef} from 'react';
import SecondSectionCard from '../SecondSectionCard/SecondSectionCard';
import AliceCarousel from 'react-alice-carousel';
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


const SecondSection = ({data,sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef();

    const slidePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.slidePrev();
        }
    };

    const slideNext = () => {
        if (carouselRef.current) {
            carouselRef.current.slideNext();
        }
    };

    const syncActiveIndex = (event) => setActiveIndex(event.item);
    const items = data.slice(0, 10).map((item, index) => <SecondSectionCard key={index} product={item} />);

    return (
        <div className='relative px-4 lg:px-8'>
        <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className='relative'>
                <AliceCarousel
                    ref={carouselRef}
                    items={items}
                    disableButtonsControls
                    responsive={{
                        0: { items: 1 },
                        720: { items: 3 },
                        1024: { items: 5.5 },
                    }}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex > 0 && (
                    <Button
                        variant="contained"
                        className="absolute z-50"
                        onClick={slidePrev}
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '0',
                            transform: 'translate(-55%, -50%)',
                            width: 50,
                            height: 50,
                            borderRadius: '50%',
                            bgcolor: 'pink',
                            minWidth: 0,
                        }}
                        aria-label="prev"
                    >
                        <KeyboardArrowRightIcon />
                    </Button>
                )}
                {activeIndex < items.length - 5 && (  // Subtract 4 cards from the total length
                    <Button
                        variant="contained"
                        className="absolute z-50"
                        onClick={slideNext}
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            right: '0',
                            transform: 'translate(55%, -50%)',
                            width: 50,
                            height: 50,
                            borderRadius: '50%',
                            bgcolor: 'pink',
                            minWidth: 0,
                        }}
                        aria-label="next"
                    >
                        <KeyboardArrowLeftIcon />
                    </Button>
                )}
            </div>
        </div>
    );
}

export default SecondSection;
