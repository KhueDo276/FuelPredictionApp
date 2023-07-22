import request from "supertest";
import app from "../../../app.js";
import jest from "jest-mock";
import dotenv from "dotenv";

dotenv.config();
const mock = jest.fn();

  // Sign In
  describe("Sign In", () => {
    describe("Check If Username Or Password Is Missing.", () => {
      it("Test Case 1", async () => {
        const response = await request(app).post(`/api/user`).send({});
        expect(response.statusCode).toEqual(400);
      });
    });
    describe("Check If Username Is Not Found.", () => {
      it("Test Case 1", async () => {
        const response = await request(app)
          .post(`/api/user`)
          .send({ username: "unknown", password: "123456" });
        expect(response.statusCode).toEqual(400);
      });
    });
    describe("Check If Password Is Incorrect", () => {
      it("Test Case 1", async () => {
        const response = await request(app)
            .post(`/api/user`)
          .send({ userame: "KhueDo", password: "invalid" });
        expect(response.statusCode).toEqual(400);
      });
    });
    describe("Check If Username and Password Are Correct", () => {
      it("Test Case 1", async () => {
        const response = await request(app)
          .post(`/api/user`)
          .send({ userName: "KhueDo", password: "1234" });
        expect(response.statusCode).toEqual(200);
      });
    });
  });
