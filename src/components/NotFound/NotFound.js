import React from "react";
import { useHistory } from "react-router-dom";
import errorpage from "../../img/404error.jpg";
import Button from "react-bootstrap/Button";

const NotFound = () => {
  let history = useHistory();
  const backToHome = () => {
    history.push("/");
  };
  return (
    <>
      <div className='container text-center'>
        <img src={errorpage} alt='' className='img-fluid' />
        <Button
          variant='primary'
          className='mt-5'
          size='lg'
          onClick={backToHome}>
          Back To Home page
        </Button>
      </div>
    </>
  );
};

export default NotFound;
