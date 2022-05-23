import React from 'react';
import doctor from '../../assets/images/doctor.png'
import background from '../../assets/images/appointment.png'
const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${background})`
        }} className='flex justify-center items-center mx-12'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-10'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment today</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus eaque totam magni nulla nostrum non! Voluptatibus ducimus quidem, perspiciatis iure, qui aliquam atque sed eveniet, nostrum facilis ad quod.</p>
                <button className="btn my-5 btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppointment;