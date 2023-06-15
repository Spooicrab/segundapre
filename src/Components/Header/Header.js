import React from "react";
import "./Header.css";
import imagen from "./images.png";

const Header = () => {
  return (
    <div>
      <div className="Header">
        <img src={imagen} alt="Capicat" width={300}></img>
      </div>
    </div>
  );
};

export default Header;
