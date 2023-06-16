import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";

//-------------------- Components --------------------------
import Cardcat from "../Card/Card";

//-------------------- Assets --------------------------
import test from "./test.json";

/////////////////////////////////
const ItemlistContainer = () => {
  const [items, setItems] = useState([]);

  return (
    <div className="cats">
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
