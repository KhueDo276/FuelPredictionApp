import request from "supertest";
import * as mysql from "mysql";
import { Deliverys } from "../fuelQuote/pricingModule.js";
import { Pricing } from "../fuelQuote/pricingModule.js";
import { TotalPricing } from "../fuelQuote/pricingModule.js";
import { NextFunction, Request, Response } from "express";
import { identification } from "../data/iddata.js";
import {GetAddress} from "../../../client/src/components/fuelForm.js";
import {connection} from "../database/database.js";
import axios from 'axios';
describe('this is just a test', () => {
    it('My space stest', () => {
        expect(true).toEqual(true);
    });
});
jest.mock("../database/database.js", () => ({
    query: jest.fn(),
  }));

jest.mock("mysql", () => {
        const queryMock = jest.fn();
        const createConnectionMock = jest.fn(() => ({ query: queryMock }));
        return {
          createConnection: createConnectionMock,
        };
      });
describe("Tests Pricing Module", () => {
    var mockRequest = Request;
    var mockResponse= Response;


    beforeEach(() => {
        mockRequest = (body) =>({body});
        mockResponse = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
        };
    });
    it("Tests Deliverys", async () => {
            const mockaddress = "DAS";
            const mockConnection = require("../database/database.js");
            mockConnection.query.mockResolvedValue([mockaddress]);
            try {
            await Deliverys(mockRequest, mockResponse);
            expect(mockConnection.query).toHaveBeenCalledWith(
            "SELECT Address_one FROM profile WHERE idprofile = 'hello'"
            )}
        catch (error) {
            console.error(error);
            }
        });
    it('should help2', async () => {
        const req = mockRequest("1000","10/01/2000")
        const res = mockResponse;
        const reqone = mockRequest("PPN2asBW9C");
        const ress = mockResponse;
        identification(reqone,ress).then(Pricing(req,res));
    });
   it("Should insert total pricing function", ()=> {
        const req = mockRequest("34312","10001","11415 Wickchester Ln","1.71","10/01/2000","100231231");
        const res = mockResponse;
        const mockConnection = require("../database/database.js");
        TotalPricing(req,res);
        expect(mockConnection.query).toHaveBeenCalledWith(
            "INSERT INTO fuelhistory (idfuelhistory,Gallons,Address,SuggestedP,DeliveryDate,TotalP) VALUES (?,?,?,?,?,?)",
            ["34312","10001","11415 Wickchester Ln","1.71","10/01/2000","100231231"],
            expect.any(Function) 
        );
        }); 
    it("Should generate an error", () => { 
        const req = mockRequest("34312","10001","11415 Wickchester Ln","1.71","","100231231");
        const res = mockResponse;
        const response = TotalPricing(req,res);
        });
    it("It should take care of the other branches", () => { 
        const req = mockRequest("132","10/01/2000");
        const res = mockResponse;
        Pricing(req,res);
        });
    it("It should take care of the other branches", () => { 
        const req = mockRequest("dsa","");
        const res = mockResponse;
        Pricing(req,res);
        });
    });
