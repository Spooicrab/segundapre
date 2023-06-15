import React, { useState, useEffect } from "react";
import Cardcat from "../Card/Card";
import "./ItemListContainer.css";
const ItemlistContainer = () => {
  const [items, setitems] = useState([]);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((res) => res.json())
      .then((json) => setitems(json));
  }, []);

  return (
    <div className="cats">
      {items.map((items) => {
        return (
          <div className="tarjetas" key={items.id}>
            <Cardcat items={items} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemlistContainer;
