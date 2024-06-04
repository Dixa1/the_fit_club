/* eslint-disable no-unused-vars */
import React from "react";

const Experience = () => {
  return (
    <div className="dark:bg-black text-white dark:text-white py-14">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* first col */}
          <div className="bg-dark/50 p-4 grid place-items-center">
            <div className="text-center space-y-3">
              <h1 className="text-5xl font-bold">Most Common Feedback:</h1>
              <p className="text-xl font-semibold">
                {" "}
                Friendly Staff (25), Clean Facilities (20), Effective Workouts
                (15)
              </p>
            </div>
          </div>
          {/* second col */}
          <div className="grid grid-rows-2 gap-4">
            <div className="text-center p-6 bg-dark">
              <h1 className="text-3xl font-bold">4.8/5</h1>
              <p>Average Rating</p>
            </div>
            <div className="text-center p-6 bg-dark">
              <h1 className="text-3xl font-bold">100+</h1>
              <p>Total Testimonials</p>
            </div>
          </div>
          {/* Third col */}
          <div className="grid grid-rows-2 gap-4">
            <div className="text-center p-6 bg-dark">
              <h1 className="text-3xl font-bold"> 90%</h1>
              <p>Positive Feedback</p>
            </div>
            <div className="text-center p-6 bg-dark">
              <h1 className="text-3xl font-bold">150+</h1>
              <p>Satisfied Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
