import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/homePage";
import FuelFormHistory from "./components/fuelFormHistory";
import FuelForm from "./components/fuelForm";
import LoginForm from "./components/LoginForm";
import Register from "./components/register";
import ClientProfilePage from "./components/clientProfile";
import NoAccess from "./components/roles/noAccess";
import { UserElement } from "./components/roles/rolesController";
import ClientPage from "./components/clientPages/clientPage";
import ProfileManagement from "./components/Profilemanagement";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/noAccess" element={<NoAccess />} />
          <Route path="/Profilemanagement" element={<ProfileManagement />} />
          <Route path="/fuelForm" element={<FuelForm />} />
          <Route path="/fuelFormHistory" element={<FuelFormHistory />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
