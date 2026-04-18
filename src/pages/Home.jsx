import React from 'react';
import Banner from '../Components/Home/Banner';
import Hero from '../Components/Home/Hero';
import Feature from '../Components/Home/Feature';
import Testimonial from '../Components/Home/Testimonial';
import CallToAction from '../Components/Home/CallToAction';
import Pricing from '../Components/Home/Pricing';
import Footer from '../Components/Home/Footer';


const Home = () => {
    return (
        <div>
            <Banner />
            <Hero />
            <Feature />
            <Pricing/>
            <Testimonial/>
            <CallToAction/>
            <Footer/>
        </div>
    );
};

export default Home;