import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/homePage";
import FuelFormHistory from "./components/fuelFormHistory";
import FuelForm from "./components/fuelForm";
import Navbar from "./components/navbar";
import LoginPage from "./components/login";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/fuelForm" component={FuelForm} />
            <Route path="/fuelFormHistory" component={FuelFormHistory} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
