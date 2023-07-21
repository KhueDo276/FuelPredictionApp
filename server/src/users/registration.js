import mysql from 'mysql'

import { createRequire } from 'module';
const require = createRequire(import.meta.url);


const db = mysql.createConnection({
    user: "quinoesteban555",
    host: "fuelappthing.mysql.database.azure.com",
    password: "@FuelAppPrediction",
    database: "fueldatabase"
  });
var randomstring = require("randomstring");
export const registration = ((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const id = randomstring.generate(10);
    console.log(username);
    console.log(id);
    db.query("INSERT INTO usercredential(Username, ID, Password) VALUES (?, ?, ?)", 
     [username, id, password], 
     (err, result) => { console.log(err);})
     console.log({username}),
     res.send('Client created')
  });
  
