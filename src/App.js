import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/Home";
import Detailpage from "./Pages/ItemDetail/Detailpage";
import CategoryPage1 from "./Pages/Categorys/CategoryPage";
import CategoryPage2 from "./Pages/Categorys/CategoryPage2";
import Footer from "./Components/footer/footer";
//////////////////
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<Detailpage />} />
          <Route path="/category1" element={<CategoryPage1 />} />
          <Route path="/category2" element={<CategoryPage2 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
