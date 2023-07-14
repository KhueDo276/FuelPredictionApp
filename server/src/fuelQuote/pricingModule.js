class PricingModule {
  Gallons = 0;
  Name = "";
  State = "TX";
  Address = "";
  Date = "";
  SuggestedPrice = 0;
  TotalPrice = 0;
  setName(Name) {
    this.Name = Name;
  }
  setState(State) {
    this.State = State;
  }
  setGallons(Gallons) {
    this.Gallons = Gallons;
  }
  setAdress(Address) {
    this.Address = Address;
  }
  setSuggestedPrice(SuggestedPrice) {
    this.SuggestedPrice = SuggestedPrice;
  }
}
