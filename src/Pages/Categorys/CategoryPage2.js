import React from "react";
import Cardcat from "../../Components/Card/Card";
import test from "../../Components/ItemListContainer/test.json";

const ItemlistContainer = () => {
  const filteredItems = test.filter((item) => item.category === "otro");

  return (
    <div className="card">
      {filteredItems.map((item) => (
        <div className="tarjetas" key={item.id}>
          <Cardcat items={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemlistContainer;
