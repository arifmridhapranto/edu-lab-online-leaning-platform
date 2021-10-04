import React from "react";
import "./HeaderBanner.css";

const HeaderBanner = (props) => {
  const { title } = props;
  return (
    <div className='banner'>
      <h1>{title}</h1>
    </div>
  );
};

export default HeaderBanner;
