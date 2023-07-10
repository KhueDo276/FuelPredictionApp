import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const history = useHistory();
  const handleLogout = () => {
    console.log("Logout");
    history.push("/login");
  };

  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
      </ul>
      <ul className="nav-links">
        <li>
          <Link to="/profile" onClick={closeMobileMenu}>
            Profile
          </Link>
        </li>
        <li>
          <Link to="/fuelForm" onClick={closeMobileMenu}>
            Fuel Form
          </Link>
        </li>
        <li>
          <Link to="/fuelFormHistory" onClick={closeMobileMenu}>
            Fuel Form History
          </Link>
        </li>
        <li>
          <button className="logout-button" onClick={handleLogout}>
            Log Out
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
