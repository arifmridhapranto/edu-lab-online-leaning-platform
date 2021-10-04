import React from "react";
import Courses from "../Courses/Courses";
import HeroSection from "../HeroSection/HeroSection";
import OurOffers from "../OurOffers/OurOffers";
import SomeDetail from "../SomeDetail/SomeDetail";
import "./Home.css";

const Home = () => {
  return (
    <div className='home-page'>
      <HeroSection />
      <OurOffers />
      <Courses />
      <SomeDetail />
    </div>
  );
};

export default Home;
