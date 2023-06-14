import React from "react";
import "./Header.css";
import imagen from "./Carpintería-en-Madera.jpg";

const Header = () => {
  return (
    <div>
      <div className="Header">
        <img src={imagen} alt="Carpinteria" width={600}></img>
      </div>
    </div>
  );
};

export default Header;
