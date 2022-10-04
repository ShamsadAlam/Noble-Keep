import React from "react";
import "./index.css";
import logo from "./image/logo (2).png";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" width="200" height="200" />
      </div>
    </>
  );
};

export default Header;
