import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import session from "express-session";
import { fuelQuoteHistory } from "./src/fuelQuote/fuelController.js";
import { user } from "./src/user/userController.js";

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
app.get("/api/user", user);
app.get("/", (req, res) => {
    res.send("Homepage");
});
const PORT = 5001;

app.listen(PORT, () =>
    console.log(`Server is running on port: http://localhost:${PORT}...`)
);
class PricingModule{
    Gallons = 0;
    Name = '';
    State = 'TX';
    Address = '';
    Date = '';
    SuggestedPrice = 0;
    TotalPrice = 0;
    setName(Name)
    {
        this.Name = Name;
    }
    setState(State)
    {
        this.State = State;
    }
    setGallons(Gallons)
    {
        this.Gallons = Gallons;
    }
    setAdress(Address)
    {
        this.Address = Address;
    }
    setSuggestedPrice(SuggestedPrice)
    {
        this.SuggestedPrice = SuggestedPrice;
    }
}; 
