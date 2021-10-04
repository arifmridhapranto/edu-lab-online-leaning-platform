import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../../img/edulab.png";
import "./Footer.css";
import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className='container footer'>
        <div className='logo'>
          <img src={logo} alt='' />
        </div>
        <div className='menu'>
          <NavLink
            className='menu-item'
            to='/home'
            activeStyle={{
              borderBottom: "2px solid #00243a",
            }}>
            Home
          </NavLink>
          <NavLink
            className='menu-item'
            to='/about'
            activeStyle={{
              borderBottom: "2px solid #00243a",
            }}>
            About
          </NavLink>
          <NavLink
            className='menu-item'
            to='/services'
            activeStyle={{
              borderBottom: "2px solid #00243a",
            }}>
            Services
          </NavLink>
          <NavLink
            className='menu-item'
            to='/contact'
            activeStyle={{
              borderBottom: "2px solid #00243a",
            }}>
            Contact
          </NavLink>
          <NavLink
            className='menu-item'
            to='/blogs'
            activeStyle={{
              borderBottom: "2px solid #00243a",
            }}>
            Blogs
          </NavLink>
        </div>
        <div className='follow-us'>
          <i className='fab fa-facebook'></i>
          <i className='fab fa-linkedin'></i>
          <i className='fab fa-github'></i>
        </div>
      </div>
      <div className='copyright text-center p-2'>
        <p>
          Copyright &copy; reserved by |
          <Link to='https://facebook.com/pranto.mridha.7' target='_blank'>
            Pranto Mridha
          </Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
