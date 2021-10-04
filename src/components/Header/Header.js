import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../img/edulab.png";
import "./Header.css";

const Header = () => {
  return (
    <div className='header-main container'>
      <div className=''>
        <NavLink to='/'>
          <img src={logo} alt='' className='logo' />
        </NavLink>
      </div>
      <div className='ms-auto menu'>
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
    </div>
  );
};

export default Header;
