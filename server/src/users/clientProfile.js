import mysql from "mysql";
export const ProfileManagementUpdate = async (req, res) => {
  let Info = ["EJ5kMJOC0X"];
  for (let i = 0;i < req.body.length;i++)
  {
    Info.push(req.body[i]);
  }
  console.log(Info);
  var conn = mysql.createConnection({host:"fuelappthing.mysql.database.azure.com", user:"quinoesteban555", password:"@FuelAppPrediction", database:"fueldatabase", port:3306,});
  conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO profile (idprofile,Full_Name,Address_one,Address_two,City,State,Zipcode) VALUES ('"+Info[0]+"','"+Info[1]+"','"+Info[2]+"','"+Info[3]+"','"+Info[4]+"','"+Info[5]+"','"+Info[6]+"')";
      conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Success");
      });
    });
};

