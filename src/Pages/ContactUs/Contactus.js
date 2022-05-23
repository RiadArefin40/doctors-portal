import React from 'react';
import background from '../../assets/images/appointment.png'
const Contactus = () => {
    return (
        <div style={{
            background:`url(${background})`
        }} className='mt-20 '>
            <div className='py-10'>
            <h3 className='text-primary text-xl text-center'>Contact Us</h3>
            <h2 className='text-white text-2xl text-center'>Stay Connected With Us</h2>
            
            </div>
            <div  className="flex flex-col justify-center items-center py-14">
            <input type="text" placeholder="Type here" className="input w-full max-w-xs " />
            <input type="text" placeholder="Type here" className="input w-full max-w-xs my-5" />
            <textarea className="textarea w-80" placeholder="Bio"></textarea>
            <button className="btn  btn-primary my-5 uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Submit</button>
            </div>
           
        </div>
    );
};

export default Contactus;