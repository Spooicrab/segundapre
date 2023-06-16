import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import Cardcat from "../Card/Card";
import test from "./test.json";

/////////////////////////////////
const ItemlistContainer = () => {
  return (
    <div className="card">
      {test.map((item) => {
        return (
          <div className="tarjetas" key={item.id}>
            <Cardcat items={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemlistContainer;
