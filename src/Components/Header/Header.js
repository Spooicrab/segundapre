import React from "react";
import "./Header.css";

//-------------------- Assets --------------------------
import imagen from "./BIAccIA.jpg";

///////////////////////
const Header = () => {
  return (
    <div>
      <div className="Header">
        <img src={imagen} alt="Capicat" width={900}></img>
        <h1> Refugio de Gatos</h1>
      </div>
    </div>
  );
};

export default Header;
