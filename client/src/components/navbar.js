import "./styles/navbar.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Navbar = ({ history }) => {
  const navigate = useNavigate();

  const handleClick = (toLink) => {
    navigate(`/${toLink}`);
  };

  const handleClickLogOut = (e) => {
    Cookies.remove("role");
    Cookies.remove("accessToken");
    e.preventDefault();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li onClick={() => handleClick("homepage")}>Home</li>
      </ul>
      <ul className="nav-links">
        <li onClick={() => handleClick("profile")}>Profile</li>
        <li>
          <li onClick={() => handleClick("fuelForm")}>Fuel Form</li>
        </li>
        <li>
          <li onClick={() => handleClick("fuelFormHistory")}>
            Fuel Form History
          </li>
        </li>
        <li>
          <button className="logout-button" onClick={handleClickLogOut}>
            Log Out
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
