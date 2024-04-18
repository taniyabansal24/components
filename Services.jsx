import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className=" my-12 px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-semibold capitalize">
            What we offer
          </h2>
        </div>
        <div className="programs my-auto mx-20 w-90 flex items-center justify-between">
          <div className="program basis-[22rem] relative">
            <img className="w-full rounded-lg block" src="./tour.jpg" alt="" />
            <div className="caption ">
              <img src="./tourism.png" alt="" />
              <p>Tours</p>
            </div>
          </div>
          <div className="program basis-[22rem] relative">
            <img className="w-full rounded-lg block" src="./cab.jpg" alt="" />
            <div className="caption">
              <img src="./mobile-app.png" alt="" />
              <p>Cabs</p>
            </div>
          </div>
          <div className="program basis-[22rem] relative">
            <img className="w-full rounded-lg block" src="./hotels.jpg" alt="" />
            <div className="caption">
              <img src="./review.png" alt="" />
              <p>Hotels</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
