import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/register.css";
import { useNavigate } from "react-router-dom";
function Register() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (inputs.password !== inputs.confirmPassword)
    {
      return alert("The passwords do not match, please reenter");
    }
    try {
      const response = await fetch("http://localhost:5001/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Registration successful");
        navigate("/homePage",{state:{id:data}});
      } else {
        console.log("Registration failed");

      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="Register">
      <header className="Register-header">
        <h1>Fuel Prediction App</h1>
      </header>
      <form onSubmit={handleSubmit} className="Form">
        <div>
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
            placeholder="Username"
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="confirmPassword"
            value={inputs.confirmPassword || ""}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
          />
        </div>
        <div>
          <button id="register" type="submit">
            Register
          </button>
        </div>
      </form>
      <div className="Login-link">
        <Link to="/">Back to Login</Link>
      </div>
    </div>
  );
}

export default Register;
