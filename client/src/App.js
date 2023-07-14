import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import HomePage from "./components/homePage";
import FuelFormHistory from "./components/fuelFormHistory";
import FuelForm from "./components/fuelForm";
import Navbar from "./components/navbar";
import LoginForm from "./LoginForm";

function App() {
  const adminUser = { name: "Harry Potter", password: "123456" };
  const [user, setUser] = useState({ name: "" });
  const [error, setError] = useState("");
  const history = useHistory();

  const Login = (details) => {
    console.log(details);
    if (
      details.name == adminUser.name &&
      details.password == adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  };

  const Logout = () => {
    console.log("Logged out");
    setUser({ name: "" });
    history.push("/login"); // Redirect to the login page
  };
  return (
    <>
      <div>
        {user.name != "" ? (
          <div>
            <h2>
              {" "}
              <Router>
                <div>
                  <Navbar />
                  <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/fuelForm" component={FuelForm} />
                    <Route
                      path="/fuelFormHistory"
                      component={FuelFormHistory}
                    />

                    <Redirect to="/" />
                  </Switch>
                </div>
              </Router>
            </h2>
            <button onClick={Logout}>Logout</button> {/* Logout button */}
          </div>
        ) : (
          <div>
            <LoginForm Login={Login} error={error} />{" "}
          </div>
        )}
      </div>
    </>
  );
}

export default App;