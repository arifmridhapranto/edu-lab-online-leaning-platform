import React from "react";
import { useHistory } from "react-router-dom";
import "./offer.css";
import Button from "react-bootstrap/Button";

const Offer = (props) => {
  const { title, description, icon } = props.offer;
  let history = useHistory();
  const handleTitlebtn = () => {
    history.push("/services");
  };
  return (
    <div className='container text-center'>
      <i className={icon} id='icon'></i>
      <h1 className='title'>{title}</h1>
      <p className='description'>{description}</p>
      <Button variant='outline-primary' onClick={handleTitlebtn}>
        View All Courses
      </Button>
    </div>
  );
};

export default Offer;
