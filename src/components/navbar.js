import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const handleLogout = () => {
    // Logic for logout
    console.log("Logout");
  };

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
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
