import React from "react";
import logo from "../../edulab.jpg";

const Header = () => {
  return (
    <div>
      <div className='logo'>
        <img src={logo} alt='' style={{ height: "150", width: "150" }} />
      </div>
      <div className='manu'></div>
    </div>
  );
};

export default Header;
