/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import BannerImg from "../../assets/banner3.png";

const Banner3 = () => {
  const handleGetStartedClick = () => {
    window.location.hash = "#services";
  };
  return (
    <div className="py-14 dark:bg-black bg-slate-100 duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
          <div data-aos="fade-up">
            <img
              src={BannerImg}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] mx-auto"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <div data-aos="zoom-in" className="flex items-center gap-4">
                <div className="text-primary/70 text-7xl ">
                  <h1 className="font-bold">03</h1>
                </div>
                <div>
                  <p className="text-primary">Global Fitness</p>
                  <h1 className="text-2xl sm:text-4xl font-bold">
                    {" "}
                    Thriving Community
                  </h1>
                </div>
              </div>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                Here, you're not just a member; you're part of a thriving
                community united by a shared passion for health and wellness.
              </p>
              <p data-aos="fade-up" data-aos-delay="300">
                From group fitness classes to social events and challenges, our
                tight-knit community provides the encouragement and support you
                need to stay motivated and accountable.
              </p>
              <button
                data-aos="fade-up"
                className="button-outline"
                onClick={handleGetStartedClick}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
