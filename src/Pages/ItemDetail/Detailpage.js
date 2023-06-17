import { React } from "react";
import test from "../../Components/ItemListContainer/test.json";
import { useParams } from "react-router-dom";
import CardDetail from "../../Components/Card/CardDetail";

/////////////////////////////////

const DetailPage = () => {
  const { id } = useParams();
  const items = test.find((items) => items.id === id);
  return <CardDetail items={items} />;
};

export default DetailPage;
