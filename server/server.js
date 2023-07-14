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
app.get("/api/fuelQuoteHistory", fuelQuoteHistory);
app.get("/api/user", user);
app.get("/", (req, res) => {
    res.send("Homepage");
});
const PORT = 5001;

app.listen(PORT, () =>
    console.log(`Server is running on port: http://localhost:${PORT}...`)
);
