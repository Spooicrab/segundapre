import { useState, React, useEffect } from "react";
import test from "../../Components/ItemListContainer/test.json";
import Cardcat from "../../Components/Card/Card";
import { useParams } from "react-router-dom";
/////////////////////////////////

const Detailpage = () => {
  let { id } = useParams();
  return (
    <div className="cats">
      {test.map((id) => {
        return (
          <div className="tarjetas" key={id}>
            <Cardcat items={id} />
          </div>
        );
      })}
    </div>
  );
};

export default Detailpage;
