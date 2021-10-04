import React from "react";
import { useHistory } from "react-router-dom";
import "./HeroSection.css";
import Button from "react-bootstrap/Button";

const HeroSection = () => {
  let history = useHistory();
  const handleTitlebtn = () => {
    history.push("/services");
  };
  return (
    <div className='hero text-center' id='hero'>
      <div className='text'>
        <p>ADVANCE YOUR CAREER</p>
        <h1>Unlimited Online Learning</h1>
        <h3>EVERYTHING YOU NEED FOR YOUR DREAM</h3>
        <Button variant='primary' onClick={handleTitlebtn} className='mt-5'>
          All Courses
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
