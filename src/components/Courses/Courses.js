import React, { useEffect } from "react";
import { useState } from "react";
import { CardGroup } from "react-bootstrap";
import Course from "../Course/Course";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./Course.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className='container mt-5'>
      <h1 className='text-center m-5 title-OurOffers'>Our Courses</h1>
      <CardGroup className='Course-section'>
        {courses.slice(0, 6).map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </CardGroup>
    </div>
  );
};

export default Courses;
