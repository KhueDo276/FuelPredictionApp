import React from "react";
import Navbar from "./navbar";
import "./styles/homePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <h1>Fuel Prediction App</h1>
      <p>
        Cultivating innovation and driving growth, our software empowers
        companies of all sizes to unlock their full potential in the digital
        landscape, revolutionizing how they operate and thrive in the
        ever-evolving business landscape.
      </p>
    </div>
  );
};

export default HomePage;
