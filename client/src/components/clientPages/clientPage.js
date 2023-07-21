import { useNavigate } from "react-router-dom";
import "../styles/clientPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import logo from "../image/logo.svg";
import Cookies from "js-cookie";

function ClientPage() {
  const navigate = useNavigate();

  const handleClick = (toLink) => {
    navigate(`/${toLink}`);
  };

  const handleClickfuel = (toLink) => {
    navigate(`/${toLink}`);
  };

  const handleClickLogOut = (e) => {
    Cookies.remove("role");
    Cookies.remove("accessToken");
    e.preventDefault();
    navigate("/");
  };

  const handleClickLogo = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <nav className="navbar nav-pad navbar-light bg-light">
        <a
          className="navbar-brand"
          href="/ClientPage"
          onClick={handleClickLogo}
        >
          {/* <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt=""
          ></img> */}
        </a>
        <a
          className="nav-item nav-link click"
          href="#"
          onClick={handleClickLogOut}
        >
          Log Out
        </a>
      </nav>
      <div className="div_clientpage">
        <p className="welcome">Welcome back</p>
        <div className="headClientPage"></div>
        <div className="outside">
          <div
            className="container"
            style={{ backgroundColor: "#ff8177" }}
            onClick={() => handleClick(`ProfileManagement`)}
          >
            <p>Manage Personal Information</p>
          </div>

          <div
            className="container"
            style={{ backgroundColor: "#cf556c" }}
            onClick={() => handleClick("FuelQuoteForm")}
          >
            <p>Fuel Quote Form</p>
          </div>

          <div
            className="container"
            style={{ backgroundColor: "#c42e4d" }}
            onClick={() => handleClickfuel("FuelQuoteHistory")}
          >
            <p>Fuel Quote History</p>
          </div>

          <div
            className="container"
            style={{ backgroundColor: "#a00533" }}
            onClick={() => handleClick("ChangePassPage")}
          >
            <p>Change Password</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientPage;
