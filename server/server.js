import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import session from "express-session";
import { fuelQuoteHistory } from "./src/fuelQuote/fuelController.js";
import { user } from "./src/users/userController.js";
import {Pricing, Deliverys} from "./src/fuelQuote/pricingModule.js";
const app = express();
app.use(
  session({
    secret: "your secret key",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(cors());
app.use(bodyParser.json());
app.post("/api/register", (req, res) => {
  // Retrieve data from the request body
  const { username, password, confirmPassword } = req.body;

  // Perform validation checks on the data
  if (!username || !password || !confirmPassword) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }
  return res.status(200).json({ message: "Registration successful" });
});
app.get("/api/fuelQuoteHistory", fuelQuoteHistory);
app.post("/api/user", user);
app.get("/api/PricingModule", Deliverys);
app.post("/api/PricingModule", Pricing);
app.get("/", (req, res) => {
  res.send("Homepage");
});
const PORT = 5001;

app.listen(PORT, () =>
  console.log(`Server is running on port: http://localhost:${PORT}...`)
);
