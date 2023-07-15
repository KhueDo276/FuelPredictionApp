const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan')
const cors = require('cors');
const app = express();
class PricingModule{
    Gallons = 0;
    Name = '';
    State = 'TX';
    Address = '';
    Date = '';
    SuggestedPrice = 0;
    TotalPrice = 0;
    setDate(Date)
    {
        this.Date = Date;
    }
    setState(State)
    {
        this.State = State;
    }
    setGallons(Gallons)
    {
        this.Gallons = Gallons;
    }
    setAddress(Address)
    {
        this.Address = Address;
    }
    setSuggestedPrice(SuggestedPrice)
    {
        this.SuggestedPrice = SuggestedPrice;
    }
    getGallons()
    {
        return this.Gallons;
    }
    getAddress()
    {
        return this.Address;
    }
    getDate()
    {
        return this.Date;
    }
};
var Newguy = new PricingModule();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get('/home', function(req,res){
    let one = "dfs";
    console.log('Inside of Home Login')
    res.writeHead(200, {'Content-Type': 'application/json',})
    console.log('Info: ', JSON.stringify(one));
    res.end(JSON.stringify(one));
});
})
app.post('/home', function(req,res) {
        Newguy.setGallons(req.body[0]);
        Newguy.setDate(req.body[2]);
        Gallon = parseInt(Newguy.getGallons());
        Gallons = findtruth(Gallon);
        if (Gallons == "false")
        {
            return res.status(400).json({ error: "Missing required fields" });
        }
        else{
            console.log("TRUEE");
        }    
});
findtruth = (number) =>
{
    return Number.isInteger(number);
};

app.listen(5001, ()=> {console.log("Server started on 5001")})
