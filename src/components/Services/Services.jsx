import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const skillsData = [
  {
    name: "Gold Card",
    price: 5000,
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "/gymservices", // Updated link to navigate to GymServices page
    description: [
      "Monthly access to fitness area.",
      "Training sessions on demand.",
      "Personal trainer on demand.",
      "Live classes on demand.",
    ],
    duration: "3 month",
    aosDelay: "0",
  },
  {
    name: "Flexible Card",
    price: 16000,
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "/gymservices", // Updated link to navigate to GymServices page
    description: [
      "Monthly access to fitness area.",
      "Training sessions on demand.",
      "Personal trainer on demand.",
      "Live classes on demand.",
    ],
    duration: "9 month",
    aosDelay: "500",
  },
  {
    name: "Platinum Card",
    price: 20000,
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "/gymservices", // Updated link to navigate to GymServices page
    description: [
      "Monthly access to fitness area.",
      "Training sessions on demand.",
      "Personal trainer on demand.",
      "Live classes on demand.",
    ],
    duration: "12 month",
    aosDelay: "1000",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-bold text-center sm:text-4xl"
            >
              Why <span className="text-primary">Choose</span> Us
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center space-y-3 sm:space-y-6 p-4 sm:py-16 bg-gray-200 dark:bg-dark hover:bg-primary/20 dark:hover:bg-primary/50 duration-300 text-black dark:text-white rounded-lg group"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-3xl font-bold">{skill.name}</h1>
                <h1 className="text-center text-4xl font-semibold text-primary">
                  NPR {skill.price}
                </h1>
                {skill.description.map((desc, index) => (
                  <p key={index}>{desc}</p>
                ))}
                <p className="font-semibold text-2xl">
                  Duration: {skill.duration}
                </p>
                <Link
                  to={skill.link}
                  className="primary-btn mt-4 group-hover:scale-105 duration-200"
                >
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
