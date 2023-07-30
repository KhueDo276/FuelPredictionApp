import { fuelQuoteHistory } from "../fuelQuote/fuelController.js";
// Mock the database connection
jest.mock("../database/database.js", () => ({
  query: jest.fn(),
}));

describe("fuelQuoteHistory", () => {
  it("should return fuel history records", async () => {
    // Mock the database query result with the data you inserted
    const mockRows = [
      {
        idfuelhistory: "NJPnCfmmx5",
        Address: "456 Cypress, Houston",
        Gallons: 170,
        SuggestedP: 2.9,
        DeliveryDate: "2023-07-12",
        TotalP: 100,
      },
    ];

    // Mock the database query function to return the mockRows
    const mockConnection = require("../database/database.js");
    mockConnection.query.mockResolvedValue([mockRows]);

    // Mock the Express response object
    const mockResponse = {
      json: jest.fn(),
    };

    // Mock the Express request object (if needed)
    const mockRequest = {};

    try {
      // Call the function to be tested
      await fuelQuoteHistory(mockRequest, mockResponse);

      // Expect that the query method of the database connection was called with the correct SQL query
      expect(mockConnection.query).toHaveBeenCalledWith(
        "SELECT * FROM fuelhistory"
      );

      // Expect that the response.json method was called with the mock rows returned from the database
      expect(mockResponse.json).toHaveBeenCalledWith(mockRows);
    } catch (error) {
      // If any error occurs, log it to the console for debugging
      console.error(error);
    }
  });
});
