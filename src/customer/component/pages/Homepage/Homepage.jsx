import React from 'react';
import Firstpage from '../../Carousel/Firstpage';
import SecondSection from '../../Second-section/SecondSection';
import MenKurta from "../../../../Data/MenKurta";
import FrontPage from '../../front-page/FrontPage'
import CircleSection from '../../Circlesection/CircleSection';

const Homepage = () => {
    return (
        <div className="min-h-screen bg-gray-100 ">
            <FrontPage/>
            <CircleSection/>
            {/* <Firstpage className="z-10"/> */}
           
        </div>
    );
}

export default Homepage;
