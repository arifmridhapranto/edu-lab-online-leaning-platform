import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Course.css";

const Course = (props) => {
  const { thumbnail, title, imgtutor, price, tutorname, rating, review } =
    props.course;
  let history = useHistory();
  const handleTitlebtn = () => {
    history.push("/services");
  };
  return (
    <Card style={{ width: "22rem" }}>
      <Card.Img variant='top' src={thumbnail} className='card-img img-fluid' />
      <div className='details'>
        <div className='tutor-details'>
          <img src={imgtutor} alt='' className='img-tutor img-fluid' />
          <h6>{tutorname}</h6>
        </div>
        <div className='price'>
          <p>${price}</p>
        </div>
      </div>
      <Card.Body>
        <Card.Title className='course-title'>{title}</Card.Title>
        <div className='rating-detail'>
          <p>{rating}</p>
          <p>({review}K review)</p>
        </div>
      </Card.Body>
      <Button variant='primary' onClick={handleTitlebtn}>
        Enroll Now
      </Button>
    </Card>
  );
};

export default Course;
