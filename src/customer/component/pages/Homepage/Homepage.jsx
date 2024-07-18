import React from 'react';
import Firstpage from '../../Carousel/Firstpage';
import SecondSection from '../../Second-section/SecondSection';
import MenKurta from "../../../../Data/MenKurta";


const Homepage = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-5">
            <Firstpage className="z-10"/>
            <div className='space-y-10 py-20 flex flex-col justify-center px-5 '>
            <SecondSection data={MenKurta} sectionName={"Men's Kurta"}/>
            <SecondSection data={MenKurta} sectionName={"Women's Kurta"}/>
            <SecondSection data={MenKurta} sectionName={"Men's Shirt"} />
            <SecondSection data={MenKurta} sectionName={"Women's Shirt"}/>
          
            </div>
        </div>
    );
}

export default Homepage;
