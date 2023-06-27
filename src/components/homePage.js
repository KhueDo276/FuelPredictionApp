import React from "react";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Fuel Prediction App</h1>
      <p>
        Welcome to the Fuel Prediction App. This app helps you predict fuel
        consumption based on various factors.
      </p>
      <div className="cta-section">
        <input type="text" placeholder="Enter distance in kilometers" />
        <input type="text" placeholder="Enter vehicle model" />
        <button>Get Prediction</button>
      </div>
    </div>
  );
};

export default HomePage;
