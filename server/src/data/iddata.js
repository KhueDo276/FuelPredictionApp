import connection from "../database/database.js";
import mysql from "mysql"
var poo = "hello"
var doo;
var hoo;
export const identification = async (req, res) => {
    let xo = req.body[0];
    poo = xo;
    word();
    const [foundUser] = await connection.query("SELECT State FROM state WHERE idState = '"+poo+"'");
    doo = foundUser[0].State;
    const [foundHistory] = await connection.query("SELECT * FROM fuelhistory WHERE idfuelhistory = '"+poo+"'");
    if (foundHistory.length == 0)
    { 
        hoo = 0;
    }
    else
    {
        hoo = 1;
    }
};
export const word = (() => {
    return poo;
})
export const dord = (() => {
    return doo;
})
export const hord = (() => {
    return hoo;
})
export var poo,hoo,doo;
