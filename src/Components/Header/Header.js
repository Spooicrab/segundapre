import React from "react";
import "./Header.css";

//-------------------- Assets --------------------------
import imagen from "./producto-e1572738586616-800x400.jpg";

///////////////////////
const Header = () => {
  return (
    <div>
      <div className="Header">
        <img src={imagen} alt="Capicat" width={900}></img>
        <h1>Mercado</h1>
      </div>
    </div>
  );
};

export default Header;
