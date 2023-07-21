import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import session from "express-session";
import { fuelQuoteHistory } from "./src/fuelQuote/fuelController.js";
import { user } from "./src/users/userController.js";
import {Pricing, Deliverys} from "./src/fuelQuote/pricingModule.js";
import { ProfileManagementUpdate } from "./src/users/clientProfile.js";
import { registration } from "./src/users/registration.js";

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
app.get("/api/fuelQuoteHistory", fuelQuoteHistory);
app.post("/api/user", user);
app.get("/api/PricingModule", Deliverys);

app.post("/api/register", registration);;
app.post("/api/PricingModule", Pricing);
app.post("/api/clientProfile",ProfileManagementUpdate);

app.get("/", (req, res) => {
  res.send("Homepage");
});
const PORT = 5001;

app.listen(PORT, () =>
  console.log(`Server is running on port: http://localhost:${PORT}...`)
);
