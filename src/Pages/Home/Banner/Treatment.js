import React from 'react';
import treatment from '../../../assets/images/treatment.png'
const Treatment = () => {
    return (
        <div>
           <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={treatment} className="max-w-sm  rounded-lg shadow-3xl lg:ml-20" />
    <div className='lg:ml-20'>
      <h1 className="text-5xl font-bold">Exceptional Dental Care On Your Terms</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary px-10 uppercase text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Treatment;