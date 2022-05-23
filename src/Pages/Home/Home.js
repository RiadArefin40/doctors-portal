import React from 'react';
import Contactus from '../ContactUs/Contactus';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';
import Banner from './Banner/Banner';

import Info from './Banner/Info';
import ServiceSection from './Banner/ServiceSection';
import Treatment from './Banner/Treatment';

const Home = () => {
    return (
        <div className=''>
                <Banner></Banner>
                <Info></Info>
                <ServiceSection></ServiceSection>
               <Treatment></Treatment>
               <MakeAppointment></MakeAppointment>
               <Testimonial></Testimonial>
               <Contactus></Contactus>
        </div>
    );
};

export default Home;