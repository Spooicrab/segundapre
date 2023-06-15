import React, { useState, useEffect } from "react";

const ItemlistContainer = () => {
  const [items, setitems] = useState([]);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <div>
      <h1>Listitems </h1>
    </div>
  );
};

export default ItemlistContainer;
