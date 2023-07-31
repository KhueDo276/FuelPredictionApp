import React, { useEffect } from "react";
import Navbar from "./navbar";
import {useLocation} from 'react-router-dom'
import "./styles/homePage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
     const fetchData = async (e) => {
      e = "da";
      if (location.state.id != null){
      e = location.state.id;
      let flag = location.state.check;
      if (flag === true)
      {
        alert("Please go to profile management to update your information and proceed with quotes, it will not work otherwise");
      }
      let xon = [e];
      try { axios
        .post("http://localhost:5001/api/iddata", xon)
        .then(() => console.log("info sent"))
        .catch((err) => {
            console.error(err);
          });
      } catch (error) {
        console.log(error);
      }
    }
    else
    {
      
      navigate("/");
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
