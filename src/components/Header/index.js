import React from "react";
import "./style.scss";
const Header = () => {
  return (
    <div className="Header">
      <div className="left">
        <div className="logo">Logo</div>
        <button className="btn green">Coming Soon</button>
        <button className="btn">Now Showing</button>
      </div>
    </div>
  );
};

export default Header;
