import React, { Component } from "react";
import { FormErrors } from "./FormErrors";
import "./profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      bio: "",
      age: "",
      formErrors: {
        username: "",
        bio: "",
        age: "",
      },
      usernameValid: false,
      bioValid: false,
      ageValid: false,
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
    let usernameValid = this.state.usernameValid;
    let bioValid = this.state.bioValid;
    let ageValid = this.state.ageValid;

    switch (fieldName) {
      case "username":
        usernameValid = value.length >= 5;
        fieldValidationErrors.username = usernameValid ? "" : " is invalid";
        break;
      case "bio":
        bioValid = value.length > 10;
        fieldValidationErrors.bio = bioValid ? "" : " is too short";
        break;
      case "age":
        ageValid = value >= 18 && value <= 100;
        fieldValidationErrors.age = ageValid ? "" : " is invalid";
        break;
      default:
        break;
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        usernameValid: usernameValid,
        bioValid: bioValid,
        ageValid: ageValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.usernameValid && this.state.bioValid && this.state.ageValid,
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  render() {
    return (
      <form className="profileForm">
        <h2>Edit Profile</h2>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div
          className={`form-group ${this.errorClass(
            this.state.formErrors.username
          )}`}
        >
          <label htmlFor="username">Username </label>
          <input
            type="text"
            required
            className="form-control"
            name="username"
            placeholder="Username"
            value={this.state.username}
            maxLength={50}
            onChange={this.handleUserInput}
          />
        </div>
        <div
          className={`form-group ${this.errorClass(this.state.formErrors.bio)}`}
        >
          <label htmlFor="bio">Bio </label>
          <textarea
            required
            className="form-control"
            name="bio"
            placeholder="Bio"
            value={this.state.bio}
            maxLength={500}
            onChange={this.handleUserInput}
          />
        </div>
        <div
          className={`form-group ${this.errorClass(this.state.formErrors.age)}`}
        >
          <label htmlFor="age">Age </label>
          <input
            type="number"
            className="form-control"
            name="age"
            placeholder="Age"
            value={this.state.age}
            min={18}
            max={100}
            onChange={this.handleUserInput}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!this.state.formValid}
        >
          Save Profile
        </button>
      </form>
    );
  }
}

export default Profile;
