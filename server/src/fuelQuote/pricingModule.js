import mysql from "mysql";
export class PricingModule {
  Gallons = 0;
  Name = "";
  State = "TX";
  Address = "";
  Date = "";
  SuggestedPrice = 0;
  TotalPrice = 0;
  setDate(Date) {
    this.Date = Date;
  }
  setState(State) {
    this.State = State;
  }
  setGallons(Gallons) {
    this.Gallons = Gallons;
  }
  setAddress(Address) {
    this.Address = Address;
  }
  setSuggestedPrice(SuggestedPrice) {
    this.SuggestedPrice = SuggestedPrice;
  }
  getGallons() {
    return this.Gallons;
  }
  getAddress() {
    return this.Address;
  }
  getDate() {
    return this.Date;
  }
}

export const Deliverys = async(req, res) => {
  var conn = mysql.createConnection({host:"fuelappthing.mysql.database.azure.com", user:"quinoesteban555", password:"@FuelAppPrediction", database:"fueldatabase", port:3306,});
  conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "SELECT Address_one FROM profile WHERE idprofile = 312421";
      conn.query(sql, function (err, result) {
        if (err) throw err;
        return res.json(result[0].Address_one);
      });
    });
};
export const Pricing = async (req, res) => {
  var Newguy = new PricingModule();
  Newguy.setGallons(req.body[0]);
  Newguy.setDate(req.body[1]);
  let Gallons = "";
};
