/* eslint-disable no-unused-vars */
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

// Component import
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import About from "./components/About/About";
import Banner3 from "./components/About/Banner3";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Banner2 from "./components/Banner2/Banner2";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import MembershipForm from "./components/MembershipForm/MembershipForm";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonials/Testimonials";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Banner2 />
      <Banner3 />
      <Experience />
      <Contact />
      <Services />
  
      <AppStoreBanner />
      <Testimonial />
      <MembershipForm />
      <Footer />
    </div>
  );
};

export default App;
