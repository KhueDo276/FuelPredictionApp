import React, { Component } from "react";
import { FormErrors } from "./FormErrors";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      address: "",
      states: "",
      formErrors: {
        email: "",
        password: "",
        address: "",
        address2: "",
        city: "",
        states: "",
      },
      emailValid: false,
      passwordValid: false,
      addressValid: false,
      cityValid: false,
      statesValid: false,
      formValid: false,
    };
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let addressValid = this.state.addressValid;
    let cityValid = this.state.cityValid;
    let statesValid = this.state.statesValid;
    switch (fieldName) {
      case "firstname":
        emailValid = value.length >= 5;
        fieldValidationErrors.Name = emailValid ? "" : " is invalid";
        break;
      case "zipcode":
        passwordValid = value.length >= 5;
        fieldValidationErrors.Zipcode = passwordValid ? "" : " is too short";
        break;
      case "address":
        addressValid = value.length > 10;
        fieldValidationErrors.Address = addressValid ? "" : " is too short";
        break;
      case "city":
        cityValid = value.length > 5;
        fieldValidationErrors.City = cityValid ? "" : " is too short";
        break;
      case "states":
        statesValid = value.length < 10;
        fieldValidationErrors.State = statesValid ? "" : " is invalid";
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
        addressValid: addressValid,
        cityValid: cityValid,
        statesValid: statesValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.passwordValid &&
        this.state.addressValid &&
        this.state.statesValid &&
        this.state.cityValid,
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  render() {
    return (
      <form className="demoForm">
        <h2>Sign up</h2>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div
          className={`form-group ${this.errorClass(
            this.state.formErrors.email
          )}`}
        >
          <label htmlFor="fullname">Full Name </label>
          <input
            type="text"
            required
            className="form-control"
            name="firstname"
            placeholder="Full Name"
            value={this.state.firstname}
            maxLength={50}
            onChange={this.handleUserInput}
          />
        </div>
        <div
          className={`form-group ${this.errorClass(
            this.state.formErrors.address
          )}`}
        >
          <label htmlFor="address">Address </label>
          <input
            type="address"
            required
            className="form-control"
            name="address"
            placeholder="Address 1"
            value={this.state.address}
            maxLength={100}
            onChange={this.handleUserInput}
          />
        </div>
        <div
          className={`form-group ${this.errorClass(
            this.state.formErrors.address2
          )}`}
        >
          <label htmlFor="address 2">Address </label>
          <input
            type="address 2"
            className="form-control"
            name="address 2"
            placeholder="Address 2 (optional)"
            value={this.state.address2}
            maxLength={100}
            onChange={this.handleUserInput}
          />
        </div>
        <div
          className={`form-group ${this.errorClass(
            this.state.formErrors.password
          )}`}
        >
          <label htmlFor="zipcode">Zipcode </label>
          <input
            type="number"
            className="form-control"
            name="zipcode"
            placeholder="Zipcode"
            value={this.state.zipcode}
            maxLength={9}
            onChange={this.handleUserInput}
          />
        </div>
        <div
          className={`form-group ${this.errorClass(
            this.state.formErrors.city
          )}`}
        >
          <label htmlFor="city">City </label>
          <input
            type="city"
            className="form-control"
            name="city"
            placeholder="City"
            value={this.state.city}
            maxLength={100}
            onChange={this.handleUserInput}
          />
        </div>
        <div
          className={`form-group ${this.errorClass(
            this.state.formErrors.states
          )}`}
        >
          <label htmlFor="States">State </label>
          <select name="states" onChange={this.handleUserInput}>
            <option value="pick a state"></option>
            <option value="AZ">AZ</option>
            <option value="AK">AK</option>
            <option value="AR">AR</option>
            <option value="CA">CA</option>
            <option value="CO">CO</option>
            <option value="CT">CT</option>
            <option value="DE">DE</option>
            <option value="FL">FL</option>
            <option value="GA">GA</option>
            <option value="HI">HI</option>
            <option value="ID">ID</option>
            <option value="IL">IL</option>
            <option value="IN">IN</option>
            <option value="IA">IA</option>
            <option value="KS">KS</option>
            <option value="KY">KY</option>
            <option value="LA">LA</option>
            <option value="ME">ME</option>
            <option value="MD">MD</option>
            <option value="MA">MA</option>
            <option value="MI">MI</option>
            <option value="MN">MN</option>
            <option value="MS">MS</option>
            <option value="MO">MO</option>
            <option value="MT">MT</option>
            <option value="NE">NE</option>
            <option value="NV">NV</option>
            <option value="NH">NH</option>
            <option value="NJ">NJ</option>
            <option value="NM">NM</option>
            <option value="NY">NY</option>
            <option value="NC">NC</option>
            <option value="ND">ND</option>
            <option value="OH">OH</option>
            <option value="OK">OK</option>
            <option value="OR">OR</option>
            <option value="PA">PA</option>
            <option value="RI">RI</option>
            <option value="SC">SC</option>
            <option value="SD">SD</option>
            <option value="TN">TN</option>
            <option value="TX">TX</option>
            <option value="UT">UT</option>
            <option value="VT">VT</option>
            <option value="VA">VA</option>
            <option value="WA">WA</option>
            <option value="WV">WV</option>
            <option value="WI">WI</option>
            <option value="WY">WY</option>
          </select>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!this.state.formValid}
        >
          Sign up
        </button>
      </form>
    );
  }
}

export default Form;
