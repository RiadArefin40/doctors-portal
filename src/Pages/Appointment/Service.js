import React from 'react';

const Service = ({service,setTreatment}) => {
    const {name,slots}=service;
    return (
        <div className="card lg:max-h-lg bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-xl font-bold text-secondary">{name}</h2>
          <p>{slots.length>0? <span>{slots[0]}</span> : <span className='text-red-400'>No slots available</span>}</p>
          <p>{slots.length} {slots.length > 1 ?'spaces':'space'} space available</p>
          <div className="card-actions justify-end">
         
             <label htmlFor="booking-modal" 
              disabled={slots.length===0}
              onClick={ ()=> setTreatment(service)} 
              className="btn modal-button mx-auto my-5 uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
          </div>
        </div>
      </div>
    );
};

export default Service;