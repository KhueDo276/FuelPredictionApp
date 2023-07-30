import mysql from "mysql";
const randomstring = require("randomstring");

export const registration = (req, res) => {
  const db = mysql.createConnection({
    user: "quinoesteban555",
    host: "fuelappthing.mysql.database.azure.com",
    password: "@FuelAppPrediction",
    database: "fueldatabase",
  });
  const username = req.body.username;
  const password = req.body.password;
  const id = randomstring.generate(10);
  db.query(
    "INSERT INTO usercredential(Username, ID, Password) VALUES (?, ?, ?)",
    [username, id, password],
    (err) => {
      console.log(err);
    }
  );
  console.log(id);
  return res.json(id);
};
