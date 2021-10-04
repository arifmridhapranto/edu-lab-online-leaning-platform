import React, { useEffect, useState } from "react";
import { CardGroup } from "react-bootstrap";
import Course from "../Course/Course";
import HeaderBanner from "../HeaderBanner/HeaderBanner";

const Services = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./Course.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <>
      <HeaderBanner title='Services' />
      <div className='container'>
        <h1 className='text-center m-5 title-OurOffers'>Our Courses</h1>
        <CardGroup className='Course-section'>
          {courses.map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </CardGroup>
      </div>
    </>
  );
};

export default Services;
