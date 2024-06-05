/* eslint-disable no-unused-vars */
import React from "react";
import pattern from "../../assets/dumbell.jpg";

const bannerImg = {
  backgroundImage: `url(${pattern})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const AppStoreBanner = () => {
  return (
    <>
    <h1 className="text-3xl font-bold text-center sm:text-4xl ">
          Here <span className="text-primary">WE</span> Are
        </h1>
    <div className="container flex flex-col sm:flex-row justify-between items-center">
        
      <div
        className="text-white py-10 mt-12 sm:min-h-[350px] sm:flex sm:justify-end sm:items-center rounded-xl"
        style={{ ...bannerImg, flex: 1 }}
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <h1
              data-aos="fade-up"
              className="text-2xl text-center sm:text-4xl font-semibold font-serif"
            >
              State-of-the-Art Facilities
            </h1>
            <p data-aos="fade-up" className="text-center sm:px-20">
              From advanced cardio machines and free weights to specialized
              training areas and group classes, we offer everything you need to
              stay fit and motivated. Join us to discover the best version of
              yourself.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 p-2 mt-10 ">
           <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.8522878209096!2d87.27570334263595!3d26.460489915559922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef7443d02a809f%3A0xebc3de40d9d11b38!2sShiv%20Shakti%20Gym%20Club!5e0!3m2!1sen!2snp!4v1717579702118!5m2!1sen!2snp"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    </>
  );
};

export default AppStoreBanner;
  