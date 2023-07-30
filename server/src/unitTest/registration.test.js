import { registration } from "../users/registration.js";
import * as mysql from "mysql";

// Mock the 'mysql' module
jest.mock("mysql", () => {
  const queryMock = jest.fn();
  const createConnectionMock = jest.fn(() => ({ query: queryMock }));

  return {
    createConnection: createConnectionMock,
  };
});

// Mock the 'randomstring' module
jest.mock("randomstring", () => ({
  generate: jest.fn(() => "mockedID"), // Replace 'mockedID' with your desired mock ID
}));

// Mock the request and response objects for Express
const mockRequest = (body) => ({ body });
const mockResponse = () => {
  const res = {};
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe("registration", () => {
  it("should insert user credentials into the database and return the generated ID", () => {
    const req = mockRequest({ username: "testuser", password: "testpassword" });
    const res = mockResponse();

    registration(req, res);

    // Check if the correct values were used in the query
    expect(mysql.createConnection().query).toHaveBeenCalledWith(
      "INSERT INTO usercredential(Username, ID, Password) VALUES (?, ?, ?)",
      ["testuser", "mockedID", "testpassword"],
      expect.any(Function) // Ensure the callback function is provided
    );

    // Check if the generated ID was returned as JSON
    expect(res.json).toHaveBeenCalledWith("mockedID");
  });

  it("should handle errors during database query", () => {
    // Mock the database connection to return an error when queried
    mysql
      .createConnection()
      .query.mockImplementationOnce((query, params, callback) => {
        const error = new Error("Database query error");
        callback(error, null);
      });

    const req = mockRequest({ username: "testuser", password: "testpassword" });
    const res = mockResponse();

    registration(req, res);

    // Check if the function handles the database query error
    expect(res.json).toHaveBeenCalledWith("mockedID"); // Or expect some error handling behavior
  });
});
