import React from 'react';
import cavity from '../../../assets/images/cavity.png';
import fluoride from '../../../assets/images/fluoride.png';
import whitening from '../../../assets/images/whitening.png'
import ServiceDetails from './ServiceDetails';
const Services = () => {
    const services=[
        {
            _id:1,
            name:'Flouride Treatment',
            des:'Flouride treatment',
            img: fluoride
        },
        {
            _id:2,
            name:'Cavity Filling',
            des:'Cavity treatment',
            img: cavity
        },
        {
            _id:3,
            name:'Whitening Treatment',
            des:'Whitening  treatment',
            img: whitening 
        }

    ]
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-28 mx-12'>
           {
               services.map(service=><ServiceDetails key={service._id} service={service}></ServiceDetails>)
           }
        </div>
    );
};

export default Services;