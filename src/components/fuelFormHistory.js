import React, { useState } from "react";
import "./fuelFormHistory.css";

const FuelFormHistory = () => {
  const fuelOrdersData = [
    {
      customerId: "001",
      gallonsRequested: 100,
      deliveryAddress: "123 Main St, City",
      deliveryDate: "2023-06-30",
      suggestedPrice: 2.5,
      totalAmountDue: 250,
    },
    {
      customerId: "002",
      gallonsRequested: 200,
      deliveryAddress: "456 Elm St, Town",
      deliveryDate: "2023-07-01",
      suggestedPrice: 2.8,
      totalAmountDue: 560,
    },
    {
      customerId: "003",
      gallonsRequested: 150,
      deliveryAddress: "789 Oak St, Village",
      deliveryDate: "2023-07-02",
      suggestedPrice: 2.6,
      totalAmountDue: 390,
    },
  ];
  const [fuelOrders, setFuelOrders] = useState(fuelOrdersData);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = () => {
    const sortedFuelOrders = [...fuelOrders].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.customerId.localeCompare(b.customerId);
      } else {
        return b.customerId.localeCompare(a.customerId);
      }
    });

    setFuelOrders(sortedFuelOrders);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <>
      <div className="table-container">
        <h1> Fuel Form History</h1>
        <table className="fuel-order-table">
          <thead>
            <tr>
              <th onClick={handleSort}>
                Customer ID{" "}
                {sortOrder === "asc" ? (
                  <span>&#9650;</span>
                ) : (
                  <span>&#9660;</span>
                )}
              </th>
              <th>Gallons Requested</th>
              <th>Delivery Address</th>
              <th>Delivery Date</th>
              <th>Suggested Price / gallon</th>
              <th>Total Amount Due</th>
            </tr>
          </thead>
          <tbody>
            {fuelOrdersData.map((fuelOrdersData, index) => (
              <tr key={index}>
                <td>{fuelOrdersData.customerId}</td>
                <td>{fuelOrdersData.gallonsRequested}</td>
                <td>{fuelOrdersData.deliveryAddress}</td>
                <td>{fuelOrdersData.deliveryDate}</td>
                <td>{fuelOrdersData.suggestedPrice}</td>
                <td>{fuelOrdersData.totalAmountDue}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleSort}>Sort by Customer ID</button>
      </div>
    </>
  );
};

export default FuelFormHistory;
