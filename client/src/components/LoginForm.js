import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function LoginForm({ Login, error }) {
   const navigate = useNavigate();

  const [details, setDetails] = useState({
    name: "",
    password: ""
  });

  const handleLogin = (userId) => {
    //Set session userId
    navigate("/homePage");
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Send the form data to the backend for validation and persistence
    try {
      const response = await fetch("http://localhost:5001/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });
      const data = await response.json();
      
      if (data.message == "True") {
        handleLogin(data.userId);
      }
      else {
        alert(data.message);
      }
    } catch (error) {
      console.log("Error:", error);
      // Handle error state or display an error message to the user
    }
  };
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <h2>Fuel Company #2</h2>
          {error !== "" ? <div className="error"> {error}</div> : ""}
          <div className="form-group">
            <label htmlFor="name">User Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </div>
          <div className="button-group">
            <input type="submit" value="LOGIN" />
            <Link to="/register" onClick={closeMobileMenu}>
              REGISTER
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
