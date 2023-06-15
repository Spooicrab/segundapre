import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import ItemlistContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <ItemlistContainer />
    </div>
  );
}

export default App;
