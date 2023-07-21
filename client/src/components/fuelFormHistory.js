import React, { useState, useEffect } from "react";
import "./styles/fuelFormHistory.css";
import axios from "axios";
import Navbar from "./navbar";

const FuelFormHistory = () => {
  const [fuelQuoteHistory, setFuelQuoteHistory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/fuelQuoteHistory"
        );
        setFuelQuoteHistory(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="table-container">
        <h1> Fuel Form History</h1>
        <table className="fuel-order-table">
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Gallons Requested</th>
              <th>Delivery Address</th>
              <th>Delivery Date</th>
              <th>Suggested Price / gallon</th>
              <th>Total Amount Due</th>
            </tr>
          </thead>
          <tbody>
            {fuelQuoteHistory.length > 0 ? (
              fuelQuoteHistory.map((fuelOrdersData, index) => (
                <tr key={index}>
                  <td>{fuelOrdersData.idfuelhistory}</td>
                  <td>{fuelOrdersData.Gallons}</td>
                  <td>{fuelOrdersData.Address}</td>
                  <td>{formattedDate(fuelOrdersData.DeliveryDate)}</td>
                  <td>{fuelOrdersData.SuggestedP}</td>
                  <td>{fuelOrdersData.Gallons * fuelOrdersData.SuggestedP}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No fuel quote history available.</td>
              </tr>
            )}
          </tbody>
        </table>
        {/* <button onClick={handleSort}>Sort by Customer ID</button> */}
      </div>
    </>
  );
};
export default FuelFormHistory;

export const formattedDate = (e) => {
  const dateFromBackend = e;
  // Convert the string to a Date object
  const dateObject = new Date(dateFromBackend);
  // Get the components of the date (year, month, day)
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1; // Months are zero-based, so we add 1
  const day = dateObject.getDate();
  // Create the desired date string in "YYYY-MM-DD" format
  const result = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
  return result;
};
