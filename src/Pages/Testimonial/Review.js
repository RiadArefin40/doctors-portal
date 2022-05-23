import React from "react";
import person1 from '../../assets/images/people1.png';

const Review = ({review}) => {
  console.log(review.name)
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions flex items-center  ">
            <div className="avatar ">
              <div className="w-16 mt-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={review.img} />
               
              </div>
             
              
            </div>
            <div className="mt-10 ml-5">
                <h3 className="font-bold">{review.name}</h3>
                <p>{review.address}</p>
           </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
