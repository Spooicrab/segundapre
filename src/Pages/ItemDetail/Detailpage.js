import { React } from "react";
import test from "../../Components/ItemListContainer/test.json";
import { useParams } from "react-router-dom";
import CardDetail from "../../Components/Card/CardDetail";

/////////////////////////////////

const DetailPage = () => {
  const { id } = useParams();
  const items = test.find((items) => items.id === id);
  console.log(id);
  console.log(items);
  return <CardDetail items={items} />;
};

export default DetailPage;

/* useEffect(() => {
  setChar(test);
}, []);

const Detailpage = () => {
  let { id } = useParams;
  const filteredData = test.filter((item) => item.id === id);
};

export default Detailpage;
s;
 */
