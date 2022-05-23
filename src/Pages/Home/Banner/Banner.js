import React from "react";
import chair from '../../../assets/images/chair.png'

const Banner = () => {
  return (
    <div className="hero min-h-screen  ">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between">
        <img
          src={chair}
          className="max-w-lg rounded-lg shadow-4xl"
        />
        <div className="m-10">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here  </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi <br /> exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p> <button className="btn  btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
         
        </div>
      </div>
    </div>
  );
};

export default Banner;
