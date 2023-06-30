import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./fuelForm.css";

function FuelForm() {
  const [gallons, setGallons] = useState("");
  const [address, setAddress] = useState("#");
  const [selectedDate, setSelectedDate] = useState(null);
  const [quote, getQuote] = useState("#");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Gallons:", gallons);
    console.log("Delivery Date:", selectedDate);
    // Add logic to handle form submission here
  };

  return (
    <div className="form">
      <h1>Fuel Quote Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="gallons">Number of Gallons Requesting:</label>
        <input
          type="number"
          id="gallons"
          value={gallons}
          onChange={(e) => setGallons(e.target.value)}
          required
        />
        <br />
        <label htmlFor="location">Delivery Location: </label>
        <input type="text" id="address" value={address} readOnly />
        <br />
        <label htmlFor="date">Delivery Date:</label>
        <br />
        <DatePicker
          id="date"
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

export default FuelForm;
