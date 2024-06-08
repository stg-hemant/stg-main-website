import React from "react";

import HeroSection from "./Hero";
import AboutUs from "./About";
import WhyUs from "./WhyUs";
import Services from "./Services";
import Testimonials from "./Testimonials";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhyUs />
      <AboutUs />
      <Services />
      <Testimonials />
    </>
  );
};

export default HomePage;
