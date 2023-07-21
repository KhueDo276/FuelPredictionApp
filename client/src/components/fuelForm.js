import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/fuelForm.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./navbar";


  
function Pricing() {
    
  const [gallons, setGallons] = useState("");

  const [address, setAddress] = useState("#");
  const [selectedDate, setSelectedDate] = useState(null);
  const [quote, getQuote] = useState("#");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Gallons:", gallons);
    console.log("Delivery Date:", selectedDate);
    const Pricing = [gallons, selectedDate];
    axios
        .post("http://localhost:5001/api/PricingModule", Pricing)
        .then(() => console.log("info sent"))
        .catch((err) => {
            console.error(err);
          });
      };
    const GetAddress = () => {
    axios.get("http://localhost:5001/api/PricingModule")
    .then((response)=>{setAddress(response.data)
    })
    .catch((error) => 
    {
        console.log(error);
    })
    };
 
  return (
    <div className="form">
    {GetAddress()}
      <h1>Fuel Quote Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="gallons">Number of Gallons Requesting:</label>
        <input
          type="number"
          name="gallons"
          value={gallons}
          onChange={(e) => setGallons(e.target.value)}
          required
        />
        <br />
        <label htmlFor="location">Delivery Location: </label>
        <input type="text" name="address" value={address} readOnly />
        <br />
        <label htmlFor="date">Delivery Date:</label>
        <br />
        <DatePicker
          name="date"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="MM/dd/yyyy"
          required
        />
        <br />
        <label htmlFor="quote">Suggested price per gallon:</label>
        <input type="text" id="quote" value={quote} readOnly />
        <br />
        <label htmlFor="amountDue">Amount Due:</label>
        <input type="text" id="amountdue" value={quote} readOnly />
        <br />
        <input type="submit" value="Submit" />
        <br />
      </form>
    </div>
  );
}

export default Pricing;
