import React from 'react';
import Banner from '../Components/Home/Banner';
import Hero from '../Components/Home/Hero';
import Feature from '../Components/Home/Feature';
import Testimonial from '../Components/Home/Testimonial';
import CallToAction from '../Components/Home/CallToAction';


const Home = () => {
    return (
        <div>
            <Banner />
            <Hero />
            <Feature />
            <Testimonial/>
            <CallToAction/>
        </div>
    );
};

export default Home;