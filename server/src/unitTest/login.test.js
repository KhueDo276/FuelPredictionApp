import request from "supertest";
import * as mysql from "mysql";
import { user } from "../users/userController.js";
describe("user", () => {
    it("if user was found", async () => {
        const mockRows = [
            {
                Username: "este5454",
                ID: "mockedID",
                Password: "2Estebanito2",
            },
        ];

        const mockConnection = require("../database/database.js");
        mockConnection.query.mockResolvedValue([mockRows]);

        
        const mockResponse = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
        };
    
        const mockRequest = (body) => ({ body });
        const rec = mockRequest({name: "este5454",password: "Estebanito"})
            user(rec, mockResponse);

            expect(mockConnection.query).toHaveBeenCalledWith(
                "SELECT * FROM usercredential WHERE Username = este5454"
            );
            expect(mockResponse.json).toHaveBeenCalledWith({ userId: "este5454", message: "True" });
        
    });
});
