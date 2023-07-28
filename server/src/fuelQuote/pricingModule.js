import connection from "../database/database.js";
import { word, hord, dord } from "../data/iddata.js";
export class PricingModule {
  Gallons = 0;
  Name = "";
  State = "TX";
  Address = "";
  Date = "";
  Id = "";
  CurrentPrice = 1.50;
  LocationFactor = 0.00;
  HistoryFactor = 0.00;
  GallonsFactor = 0.00;
  CompanyFactor = 0.10;
  SuggestedPrice = 0;
  MarginFactor = 0;
  TotalPrice = 0;
  setDate(Date) {
    this.Date = Date;
  }
  setState(State) {
    this.State = State;
    if (State == "TX")
    {
      this.LocationFactor = 0.02;
    }
    else 
    {
      this.LocationFactor = 0.04;
    }
  }
  setGallons(Gallons) {
    this.Gallons = Gallons;
  }
  setGallonsFactor(Gallons)
  {
    if (Gallons > 1000)
    {
      this.GallonsFactor = 0.02;
    }
    else if (Gallons <= 1000)
    {
      this.GallonsFactor = 0.03;
    }
  }
  setLocationFactor(State)
  {
    if (State == "TX")
    {
      this.LocationFactor = 0.02;
    }
    else
    { 
      this.LocationFactor = 0.04;
    }
  }
  setHistoryFactor(Flag)
  {
    if (Flag > 0 )
    {
      this.HistoryFactor = 0.01;
    }
    else
    { 
      this.HistoryFactor = 0.00;
    }
  }
  setAddress(Address) {
    this.Address = Address;
  }
  setSuggestedPrice() {
    this.SuggestedPrice = this.CurrentPrice + this.MarginFactor;
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
  setId(Id)
  {
    this.Id = Id;
  }
  getId() {
    return this.Id;
  }
  setMarginFactor()
  {
    this.MarginFactor = this.CurrentPrice * (this.LocationFactor - this.HistoryFactor + this.GallonsFactor + this.CompanyFactor)
  }
  getMarginFactor()
  {
    return this.MarginFactor;
  }
  getState()
  {
    return this.State;
  }
  getLocationFactor()
  {
    return this.LocationFactor;
  }
  setTotalPrice()
  {
    this.TotalPrice = this.SuggestedPrice * this.Gallons;
  }
  getTotalPrice()
  {
    return this.TotalPrice;
  }
  getSuggestedPrice()
  {
    return this.SuggestedPrice;
  }
  getHistoryFactor()
  {
    return this.HistoryFactor;
  }
}

export const Deliverys = async(req, res) => {
  let mon = word();
  const [foundUser] = await connection.query("SELECT Address_one FROM profile WHERE idprofile = '"+mon+"'"); 
  if (foundUser[0] != undefined && foundUser[0] != null)
  {  
  console.log(foundUser[0]);
  return res.status(200).json(foundUser[0].Address_one);
  }
  else
  {
    return res.status(201).json({message: "You need to relogin"});
  }
     
};
export const Pricing = async (req, res) => { 
  console.log(req.body[1]);
  console.log(req.body[0]);
  var num = req.body[0];
  let com = parseInt(num);
  if (req.body[1] == "")
    {
      console.log("sdfa");
      return res.json({ message: "Incorrect Date" });
    }
  
  else if (Number.isInteger(com) == false)
  {

    console.log('das');
    return res.json({message: "The Gallons is not a number variable"});
  }
  else
  {
  var Newguy = new PricingModule();
  let state = dord();
  let history = hord();
  Newguy.setState(state);
  Newguy.setHistoryFactor(history);
  Newguy.setGallons(com);
  Newguy.setDate(req.body[1])
  Newguy.setLocationFactor(Newguy.getState());
  Newguy.setGallonsFactor(Newguy.getGallons());
  Newguy.setMarginFactor();
  Newguy.setSuggestedPrice();
  Newguy.setTotalPrice();
  return res.status(201).json({suggestedprice: Newguy.getSuggestedPrice(), totalprice: Newguy.getTotalPrice()});
  }
};

export const TotalPricing = async (req, res) => 
{
  let mon = word();
  let Info = [mon];
  for (let i = 0;i < req.body.length;i++)
  {
    Info.push(req.body[i]);
  }
  console.log(Info[4]);
  if (Info[4] == null)
  {
    return res.status(400).json({ message: "Incorrect Date" });
  }
  connection.query("INSERT INTO fuelhistory (idfuelhistory,Gallons,Address,SuggestedP,DeliveryDate,TotalP) VALUES ('"+Info[0]+"','"+Info[1]+"','"+Info[2]+"','"+Info[3]+"','"+Info[4]+"','"+Info[5]+"')")
};
