import mysql from "mysql";
import connection from "../database/database.js";
import {word} from "../data/iddata.js";
export const ProfileManagementUpdate = async (req, res) => 
{
  var wod = word();
  console.log(wod);
  let Info = [wod];
  for (let i = 0;i < req.body.length;i++)
  {
    Info.push(req.body[i]);
  }
  const [foundUser] = await connection.query("SELECT * FROM profile WHERE idprofile = '"+wod+"'"); 
  
  if (foundUser.length == 0)
  {
    var sql = "INSERT INTO profile (idprofile,Full_Name,Address_one,Address_two,City,State,Zipcode) VALUES ('"+Info[0]+"','"+Info[1]+"','"+Info[2]+"','"+Info[3]+"','"+Info[4]+"','"+Info[5]+"','"+Info[6]+"')";
      await connection.query(sql)
  }
  else 
  {
    var sql = "UPDATE profile SET Full_Name = '"+Info[1]+"', Address_one = '"+Info[2]+"' ,Address_two = '"+Info[3]+"', City = '"+Info[4]+"', State = '"+Info[5]+"',Zipcode = '"+Info[6]+"' WHERE idprofile = '"+wod+"'";
      await connection.query(sql)
        
      }
};
