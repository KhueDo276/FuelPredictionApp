import React, { useEffect } from "react";
import Navbar from "./navbar";
import { useLocation } from "react-router-dom";
import "./styles/homePage.css";
import axios from "axios";
const HomePage = () => {
  const location = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      let mon = "da";
      if (location.state != null) {
        mon = location.state.id;
        let xon = [mon];
        try {
          axios
            .post("http://localhost:5001/api/iddata", xon)
            .then(() => console.log("info sent"))
            .catch((err) => {
              console.error(err);
            });
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchData();
  }, []);
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
