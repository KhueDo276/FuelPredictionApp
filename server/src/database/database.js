import mysql from "mysql2";

const connection = mysql
  .createConnection({
    host: "fuelappthing.mysql.database.azure.com",
    user: "quinoesteban555",
    password: "@FuelAppPrediction",
    database: "fueldatabase",
    port: 3306,
  })
  .promise();

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    return;
  }

  console.log("Connected to MySQL database.");
});
export default connection;
