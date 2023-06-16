import React from "react";

const CardDetail = ({ items }) => {
  return (
    <div>
      <img src={items.url} alt="producto en detalle" />
    </div>
  );
};

export default CardDetail;
