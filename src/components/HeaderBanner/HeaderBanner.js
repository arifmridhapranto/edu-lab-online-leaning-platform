import React from "react";
import "./HeaderBanner.css";
import "animate.css";

const HeaderBanner = (props) => {
  const { title } = props;
  return (
    <div className='banner'>
      <h1 className='animate__animated animate__heartBeat'>{title}</h1>
    </div>
  );
};

export default HeaderBanner;
