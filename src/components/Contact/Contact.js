import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Contact.css";
import Button from "react-bootstrap/Button";
import HeaderBanner from "../HeaderBanner/HeaderBanner";

const Contact = () => {
  return (
    <>
      <HeaderBanner title='Contact' />
      <div className='container text-center contact-form'>
        <div className='contact-image'>
          <img
            src='https://image.ibb.co/kUagtU/rocket_contact.png'
            alt='rocket_contact'
          />
        </div>
        <form method='post'>
          <h3>Feel free to contact us.</h3>
          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <input
                  type='text'
                  name='txtName'
                  className='form-control'
                  placeholder='Your Name *'
                  value=''
                  readOnly
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  name='txtEmail'
                  className='form-control'
                  placeholder='Your Email *'
                  value=''
                  readOnly
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  name='txtPhone'
                  className='form-control'
                  placeholder='Your Phone Number *'
                  value=''
                  readOnly
                />
              </div>
              <div className='form-group'>
                <Button variant='danger' className='mt-3'>
                  Submit
                </Button>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <textarea
                  name='txtMsg'
                  className='form-control'
                  placeholder='Your Message *'></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
