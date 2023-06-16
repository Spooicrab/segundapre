import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/Home";
import Detailpage from "./Pages/ItemDetail/Detailpage";
import CategoryPage from "./Pages/Category/CategoryPage";

//////////////////
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail" element={<Detailpage />} />
          <Route path="/category" element={<CategoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
