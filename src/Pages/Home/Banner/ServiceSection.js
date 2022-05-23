import React from "react";
import Services from "./Services";

const ServiceSection = () => {
  return (
    <div className="my-20">
      <div className="text-center">
        <h3 className="text-primary text-2xl font-bold uppercase">Our services</h3>
        <h2 className="text-4xl ">Service We Provide</h2>
        <Services></Services>
      </div>
    </div>
  );
};

export default ServiceSection;
