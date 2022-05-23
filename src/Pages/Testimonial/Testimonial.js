import React from "react";
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from "./Review";
const Testimonial = () => {
  const reviews=[
    {_id:1,
      img:people1,
      name:'William Herry',
      address:'Callifornia'
     
    },
    {_id:2,
      img:people2,
      name:'Tom Kerry',
      address:'Mexico'
     
    },
    {_id:3,
      img:people3,
      name:'William Joe',
      address:'Miami'
     
    }
  ]
  return (
  <div className="mt-20 px-16">
       <div className=" flex justify-between">
      <div className="">
        <h3 className="text-xl text-primary">Testimonials</h3>
        <h2 className="text-2xl">What Our Patient Says</h2>
      </div>
      <img className="w-32 " src={quote} alt="" />
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
    {
        reviews.map(review=><Review key={review._id} review={review}></Review>)
    }
    </div>
    
  </div>
   
  );
};

export default Testimonial;
