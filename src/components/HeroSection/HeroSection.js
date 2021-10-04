import React from "react";
import { useHistory } from "react-router-dom";
import "./HeroSection.css";
import Button from "react-bootstrap/Button";
import "animate.css";

const HeroSection = () => {
  let history = useHistory();
  const handleTitlebtn = () => {
    history.push("/services");
  };
  return (
    <div className='hero text-center' id='hero'>
      <div className='text'>
        <p className='animate__animated animate__backInDown'>
          ADVANCE YOUR CAREER
        </p>
        <h1 className='animate__animated animate__backInLeft'>
          Unlimited Online Learning
        </h1>
        <h3 className='animate__animated animate__backInUp'>
          EVERYTHING YOU NEED FOR YOUR DREAM
        </h3>
        <Button variant='primary' onClick={handleTitlebtn} className='mt-5'>
          All Courses
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
