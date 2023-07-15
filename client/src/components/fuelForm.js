import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./FuelForm.css";
import { useEffect } from "react";
import axios from 'axios'


class Pricing extends Component{
  constructor(props) {
    super(props);
    this.state = {gallons: "",address: "",date: "",suggestedprice: ""}
  };
  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },)
    };
    handleChange = (date) => {
      this.setState({date,
      });
    };
  handleSubmit = (event) => {
    event.preventDefault();
    const { gallons,address,date,suggestedprice} = this.state;
    console.log(gallons);
    const Pricing = [gallons, address, date, suggestedprice];
    axios
      .post('http://localhost:5001/home', Pricing)
      .then(()=>console.log("info sent"))
      .catch(err=> {
        console.error(err)
      });
  };
render(){
  return (
    <div className="form">
      <h1>Fuel Quote Form</h1>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="gallons">Number of Gallons Requesting:</label>
        <input
          type= "number"
          name = "gallons"
          
          value = {this.state.gallons}
          onChange={this.handleInputChange}
          required
        />
        <br />
        <label htmlFor="location">Delivery Location: </label>
        <input type="text" name="address" value = {this.state.address} readOnly />
        <br />
        <label htmlFor="date">Delivery Date:</label>
        <br />
        <DatePicker
          name = "date"
          selected={this.state.date}
          onChange = {this.handleChange}
          dateFormat="MM/dd/yyyy"
          required
        />
        <br />
        <label htmlFor="quote">Suggested price per gallon:</label>
        <input type="text" name="quote" value={this.state.suggestedprice} readOnly />
        <br />
        <label htmlFor="amountDue">Amount Due:</label>
        <input type="text" name="amountdue" value="*" readOnly />
        <br />
        <input type="submit" value="Submit" />
        <br />
      </form>
    </div>
  )};
}

export default Pricing;
