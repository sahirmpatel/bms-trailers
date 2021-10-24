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
      {/* <div className="right">
        <select value="Popular" name="" id="">
          Popular
        </select>
        <select name="" id="">
          English
        </select>
        <select name="" id="">
          All Genres
        </select>
      </div> */}
    </div>
  );
};

export default Header;
