
import { Link } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import "../styles/Navbar.css";

function Navbar() {

  const [menu, setMenu] = useState(false);

  return (
    <nav className="navbar">

      <div className="container navbar-container">

        <Link to="/" className="logo">
          <img src="/logo.jpeg" alt="logo" />
          <span>S&D Programming Hub</span>
        </Link>

        <div
          className="hamburger"
          onClick={() => setMenu(!menu)}
        >
          ☰
        </div>

        <ul className={menu ? "nav-links active" : "nav-links"}>

          <li>
            <Link to="/" onClick={() => setMenu(false)}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/courses" onClick={() => setMenu(false)}>
              Courses
            </Link>
          </li>

          <li>
            <Link to="/fees" onClick={() => setMenu(false)}>
              Fees
            </Link>
          </li>

          <li>
            <Link to="/gallery" onClick={() => setMenu(false)}>
              Gallery
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={() => setMenu(false)}>
              Contact
            </Link>
          </li>

        </ul>

        <ThemeToggle />

      </div>

    </nav>
  );
}

export default Navbar;