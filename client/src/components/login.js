import React from "react";
import { useState } from "react";
import "./login.css";

function LoginPage() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(inputs.username);
    //console.log(inputs.password);
  };

  return (
    <div className="login-page">
      <h1>Fuel Prediction App</h1>
      <form onSubmit={handleSubmit} className="cta-section-login">
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
          <button id="login" type="submit">
            Login
          </button>
          <button id="register">Register</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;