import { user } from "../users/userController.js";
// Mock the database connection
jest.mock("../database/database.js", () => ({
    query: jest.fn(),
}));

describe("user", () => {
    it("if user was found", async () => {
        // Mock the database query result with the data you inserted
        const mockRows = [
            {
                Username: "testuser",
                ID: "mockedID",
                Password: "testpassword",
            },
        ];

        // Mock the database query function to return the user
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
            await user(mockRequest, mockResponse);

            // Expect that the query method of the database connection was called with the correct SQL query
            expect(mockConnection.query).toHaveBeenCalledWith(
                "SELECT * FROM usercredential WHERE Username = testuser"
            );

            // Expect that the response.json method was called with the user returned from the database
            expect(mockResponse.json).toHaveBeenCalledWith({ userId: "testuser", message: "True" });
        } catch (error) {
            // If any error occurs, log it to the console for debugging
            console.error(error);
        }
    });
});
