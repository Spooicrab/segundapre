import "./Navbar.css";
import { Link } from "react-router-dom";

/////////////////////////
const NavBar = () => {
  return (
    <div>
      <nav className="nav-container">
        <ul className="nav-ul">
          <Link to={"/"} className="li">
            Home
          </Link>
          <Link to={"/category1"} className="li">
            Gaseosas
          </Link>
          <Link to={"category2"} className="li">
            Otro
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
