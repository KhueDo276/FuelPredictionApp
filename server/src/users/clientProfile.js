const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/api/save-client-profile", (req, res) => {
  const {
    lastName,
    firstName,
    id,
    address1,
    address2,
    zipcode,
    city,
    selectedState,
  } = req.body;

  // Perform any necessary database or file operations to save the data
  // Replace the console.log statements with your own logic

  console.log("Last Name:", lastName);
  console.log("First Name:", firstName);
  console.log("ID:", id);
  console.log("Address 1:", address1);
  console.log("Address 2:", address2);
  console.log("Zipcode:", zipcode);
  console.log("City:", city);
  console.log("State:", selectedState);

  // Send a response indicating the successful submission
  res.json({ message: "Client profile saved successfully" });
});

const port = 5001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
