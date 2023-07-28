import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/fuelForm.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./navbar";
import { Navigate } from "react-router-dom";
  
function Pricing() {
    
  const [gallons, setGallons] = useState("");
  const [id,setId] = useState("");
  const [address, setAddress] = useState("#");
  const [selectedDate, setSelectedDate] = useState("10/01/2000");
  const [quote, setQuote] = useState("#");
  const [total, setTotal] = useState("#");
  const [gallonsvalid, setGallonsvalid] = useState(false);
  const [datevalid, setDatevalid] = useState(false);
  const [addressvalid, setAddressvalid] = useState(true);
  const [formvalid,setFormvalid] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const Pricing = [gallons, selectedDate];
    axios
        .post("http://localhost:5001/api/PricingModule", Pricing)
        .then((response) => {console.log("info sent"); 
      if (response.status === 201)
      {
        setQuote(response.data.suggestedprice); setTotal(response.data.totalprice);
      }
      else 
      {
        console.log(response.data)
        alert(response.data.message);
      }
      })
        .catch((err) => {
            console.error(err);
          });
      
      };
    const GetAddress = () => {
    axios.get("http://localhost:5001/api/PricingModule")
    .then((response)=>
    {
      if (response.status == 200)
      {
      setAddress(response.data); 
      setAddressvalid(true);
      }
      else
      {
        console.log(response.data.message);
        setAddressvalid(false);
        alert(response.data.message);
      }
    })
    .catch((error) => 
    {
        console.log(error);
    })
    };
    const handleEnter = (event) => {
      event.preventDefault();
      const Pricing = [gallons,address,quote,selectedDate,total];
      axios
          .post("http://localhost:5001/api/Pricing", Pricing)
          .then((response) => {console.log("info sent");})
          .catch((err) => {
              console.error(err);
            });
        
        };
        const handleUserInput = async (e) => {
          const name = e.target.name
          const value = e.target.value;
          switch (name){
            case 'gallons':
              setGallons(value);
              if (value.length > 0)
              { 
              setGallonsvalid(true);
              }
              else
              {
              setGallonsvalid(false);
              validateForm();
              }
              break;
            case 'date':
              console.log(value, "The value of date is");
              setSelectedDate(value);
              setDatevalid(true);
              break;
            default:
              break;
          }
          validateForm()  
        }
      
   
    const validateForm = () =>
    { 
      console.log(datevalid, "date is valid");
      console.log(gallonsvalid, "gallons is valid");
      if (datevalid === true && gallonsvalid === true && addressvalid === true)
      {
        setFormvalid(true);
      }
      else{
        setFormvalid(false);
      }
      console.log(formvalid);
    }
  return (
    <>
    <Navbar />
    <div className="form">
      
    {GetAddress()}
      <h1>Fuel Quote Form</h1>
      <form>
        <label htmlFor="gallons">Number of Gallons Requesting:</label>
        <input
          type="number"
          name="gallons"
          value={gallons}
          onChange={handleUserInput}
          required
        />
        <br />
        <label htmlFor="location">Delivery Location: </label>
        <input type="text" name="address" value={address} readOnly />
        <br />
        <label htmlFor="date">Delivery Date:</label>
        <input type="date" name = "date" onChange={handleUserInput}  value = {selectedDate} required />
        <br />
        <label htmlFor="quote">Suggested price per gallon:</label>
        <input type="text" id="quote" value={quote} readOnly />
        <br />
        <label htmlFor="amountDue">Amount Due:</label>
        <input type="text" id="amountdue" value={total} readOnly />
        <br />
        <input type="submit" value="GetQuote" onClick = {handleSubmit} disabled = {!formvalid}/>
        <br />
        <br />
        <input type="submit" value="Submit" onClick = {handleEnter} disabled = {!formvalid}/>
        <br />
      </form>
    </div>
    </>
  );
}

export default Pricing;
