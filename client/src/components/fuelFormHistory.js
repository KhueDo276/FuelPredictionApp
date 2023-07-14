import React, { useState, useEffect } from "react";
import "./fuelFormHistory.css";
import axios from "axios";

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

  // //Sorting
  // const [sortOrder, setSortOrder] = useState("asc");

  // const handleSort = () => {
  //   const sortedFuelOrders = [...fuelQuoteHistory].sort((a, b) => {
  //     if (sortOrder === "asc") {
  //       return a.customerId.localeCompare(b.customerId);
  //     } else {
  //       return b.customerId.localeCompare(a.customerId);
  //     }
  //   });

  //   setFuelOrders(sortedFuelOrders);
  //   setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  // };

  // const toggleSortOrder = () => {
  //   setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  // };

  return (
    <>
      <div className="table-container">
        <h1> Fuel Form History</h1>
        <table className="fuel-order-table">
          <thead>
            <tr>
              {/* <th onClick={handleSort}>
                Customer ID{" "}
                {sortOrder === "asc" ? (
                  <span>&#9650;</span>
                ) : (
                  <span>&#9660;</span>
                )}
              </th> */}
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
                  <td>{fuelOrdersData.gallonRequested}</td>
                  <td>{fuelOrdersData.deliveryAddress}</td>
                  <td>{fuelOrdersData.deliveryDate}</td>
                  <td>{fuelOrdersData.price}</td>
                  <td>{fuelOrdersData.total}</td>
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
