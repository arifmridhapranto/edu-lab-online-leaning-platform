import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../edulab.jpg";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div>
        <NavLink to='/'>
          <img src={logo} alt='' className='logo' />
        </NavLink>
        <div className='me-auto'>
          <NavLink to='/home'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/services'>Services</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          <NavLink to='/blogs'>Blogs</NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
