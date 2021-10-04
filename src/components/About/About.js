import React from "react";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import OurOffers from "../OurOffers/OurOffers";
import SomeDetail from "../SomeDetail/SomeDetail";

const About = () => {
  return (
    <>
      <HeaderBanner title='About' />
      <div>
        <OurOffers />
        <SomeDetail />
      </div>
    </>
  );
};

export default About;
