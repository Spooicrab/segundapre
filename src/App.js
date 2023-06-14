import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";

function App() {
  return (
    <Router>
      <NavBar />
      <Header />
      <div className="App"></div>
    </Router>
  );
}

export default App;
