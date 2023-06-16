import { useState, React, useEffect } from "react";
import test from "../../Components/ItemListContainer/test.json";
import Cardcat from "../../Components/Card/Card";
import { useParams } from "react-router-dom";
/////////////////////////////////

const Detailpage = () => {
  let { id } = useParams;
  const filteredData = test.filter((item) => item.id === id);
};

export default Detailpage;
