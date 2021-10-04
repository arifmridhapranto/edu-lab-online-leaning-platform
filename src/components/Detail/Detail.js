import React from "react";
import "./Detail.css";

const detail = (props) => {
  const { icon, count, title } = props.detail;
  return (
    <div className='detail'>
      <i className={icon}></i>
      <h1>{count}</h1>
      <h1>{title}</h1>
    </div>
  );
};

export default detail;
