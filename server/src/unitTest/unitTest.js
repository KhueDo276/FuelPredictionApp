import request from "supertest";
import app from "../../../app.js";
import jest from "jest-mock";
import dotenv from "dotenv";

dotenv.config();
const mock = jest.fn();

// Admins
describe("Admin", () => {
  describe("Get Clients", () => {
    // Collect all clients
    describe("Collect all clients", () => {
      it("Collect a list of active clients", async () => {
        const response = await request(app).get("/api/admin/getClients");
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body[0]).toHaveProperty("User_id");
        expect(response.body[0]).toHaveProperty("username");
        expect(response.body[0]).toHaveProperty("password");
        expect(response.body[0]).toHaveProperty("active");
        expect(response.body[0]).toHaveProperty("Fullname");
        expect(response.body[0]).toHaveProperty("address1");
        expect(response.body[0]).toHaveProperty("address2");
        expect(response.body[0]).toHaveProperty("city");
        expect(response.body[0]).toHaveProperty("state");
        expect(response.body[0]).toHaveProperty("zipcode");
      });
    });

    // Collect a client
    describe("Collect a Client by ID", () => {
      describe("Valid ID", () => {
        it("Test Case 1", async () => {
          const response = await request(app).get(
            `/api/admin/getClient/0be325a1-163f-4fd3-89ef-0ba8eea803cc`
          );
          expect(response.status).toBe(200);
        });
        it("Test Case 2", async () => {
          const response = await request(app).get(
            `/api/admin/getClient/32f5dbc5-0b26-42f1-a61b-2a9dd32c1b75`
          );
          expect(response.status).toBe(200);
        });
      });
      describe("Invalid ID", () => {
        const userID = [5, 6];
        it("Test Case 1", async () => {
          const response = await request(app).get(
            `/api/admin/getClient/asdfkjlkjb`
          );
          expect(response.statusCode).toEqual(400);
          expect(response.body.error);
        });
        it("Test Case 2", async () => {
          const response = await request(app).get(
            `/api/admin/getClient/woirtulkjb`
          );
          expect(response.statusCode).toEqual(400);
          expect(response.body.error);
        });
      });
    });

    // Update a Client
    describe("Update a Client by ID.", () => {
      describe("Valid ID", () => {
        it("Test Case 1", async () => {
          const newInfo = {
            username: "khue",
            password: "1234",
            active: 1,
            Fullname: "KhueDo",
            address1: "12354 Brooklyn Ln",
            address2: "",
            city: "Richmond",
            state: "TX",
            zipcode: "77407",
          };
          const response = await request(app)
            .put(
              `/api/admin/modifyClientInfo/0be325a1-163f-4fd3-89ef-0ba8eea803cc`
            )
            .send(newInfo);
          expect(response.statusCode).toEqual(200);
        });
        it("Test Case 2", async () => {
          const newInfo = {
            username: "khue",
            password: "1234",
            active: 1,
            Fullname: "Khue Do",
            address1: "123 street",
            address2: "",
            city: "Houston",
            state: "TX",
            zipcode: "77400",
          };
          const response = await request(app)
            .put(
              `/api/admin/modifyClientInfo/32f5dbc5-0b26-42f1-a61b-2a9dd32c1b75`
            )
            .send(newInfo);
          expect(response.statusCode).toEqual(200);
        });
      });
      describe("Invalid ID", () => {
        const userID = [9, 10];
        it("Test Case 1", async () => {
          const newInfo = {
            username: "khue",
            password: "1234",
            active: 1,
            Fullname: "Khue Do",
            address1: "8711 Crest Ln",
            address2: "",
            city: "Richmond",
            state: "TX",
            zipcode: "77407",
          };
          const response = await request(app)
            .put(`/api/admin/modifyClientInfo/asdfkjlkjb`)
            .send(newInfo);
          expect(response.statusCode).toEqual(400);
          expect(response.body.error);
        });
        it("Test Case 2", async () => {
          const newInfo = {
            username: "khue",
            password: "1234",
            active: 1,
            Fullname: "Khue Do",
            address1: "8711 Crest Ln",
            address2: "",
            city: "Richmond",
            state: "TX",
            zipcode: "77407",
          };
          const response = await request(app)
            .put(`/api/admin/modifyClientInfo/woirtulkjb`)
            .send(newInfo);
          expect(response.statusCode).toEqual(400);
          expect(response.body.error);
        });
      });
    });

    // Collect an Order by ID
    describe("Collect an Order by ID", () => {
      describe("Valid ID", () => {
        it("Test Case 1", async () => {
          const response = await request(app).get(
            `/api/admin/getClientOrder/0be325a1-163f-4fd3-89ef-0ba8eea803cc`
          );
          expect(response.statusCode).toEqual(200);
        });
        it("Test Case 2", async () => {
          const response = await request(app).get(
            `/api/admin/getClientOrder/0f233a55-487b-47d4-95ba-e6b968bb2ffc`
          );
          expect(response.statusCode).toEqual(200);
        });
      });
      describe("Invalid ID", () => {
        const userID = [11, 12];
        it("Test Case 1", async () => {
          const response = await request(app).get(
            `/api/admin/getClientOrder/asdfkjlkjb`
          );
          expect(response.statusCode).toEqual(400);
        });
        it("Test Case 2", async () => {
          const response = await request(app).get(
            `/api/admin/getClientOrder/woirtulkjb`
          );
          expect(response.statusCode).toEqual(400);
        }, 60000);
      });
    });

    // Sign In
    describe("Sign In", () => {
      describe("Check If Username Or Password Is Missing.", () => {
        it("Test Case 1", async () => {
          const response = await request(app)
            .post(`/api/admin/signin`)
            .send({});
          expect(response.statusCode).toEqual(400);
          expect(response.body.error);
        });
      });
      describe("Check If Username Is Not Found.", () => {
        const users = [
          { userName: "chuong5", password: "1234" },
          { userName: "phat", password: "1234" },
        ];
        it("Test Case 1", async () => {
          const response = await request(app)
            .post(`/api/admin/signin`)
            .send({ userName: "unknown", password: users[0].password });
          expect(response.statusCode).toEqual(400);
          expect(response.body.error);
        });
      });
      describe("Check If Password Is Incorrect", () => {
        const users = [
          { userName: "chuong5", password: "password1" },
          { userName: "phat", password: "password2" },
        ];
        it("Test Case 1", async () => {
          const response = await request(app)
            .post(`/api/admin/signin`)
            .send({ userName: users[0].userName, password: "invalid" });
          expect(response.statusCode).toEqual(400);
          expect(response.body.error);
        });
      });
      describe("Check If Username and Password Are Correct", () => {
        it("Test Case 1", async () => {
          const response = await request(app)
            .post(`/api/admin/signin`)
            .send({ userName: "chuongadmin", password: "1234" });
          expect(response.statusCode).toEqual(200);
        });
      });
    });

    // Collect all Admins
    describe("Collect all Admins", () => {
      it("Should return a list of active admins", async () => {
        const response = await request(app).get("/api/admin/getAdmins");
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body[0]).toHaveProperty("username");
        expect(response.body[0]).toHaveProperty("password");
      });
    });
  });
});

// Users
describe("Users", () => {
  // Collect all users
  describe("Collect all Users", () => {
    test("should return user information and orders.", async () => {
      const response = await request(app).get("/api/user/getUsers");
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body[0]).toHaveProperty("User_id");
      expect(response.body[0]).toHaveProperty("username");
      expect(response.body[0]).toHaveProperty("password");
      expect(response.body[0]).toHaveProperty("info_id");
      expect(response.body[0]).toHaveProperty("active");
    });
  });

  // Sign Up
  describe("Sign Up", () => {
    let users = [];

    beforeEach(() => {
      // reset users array before each test
      users = [];
    });
    describe("Validate token for a new user", () => {
      it("should return a 200 status code and an access token when valid user information is provided", async () => {
        const newUser = {
          userName: "testuser199", // testuser200
          password: "testpassword199", // testpassword200
          confirmedPassword: "testpassword199", // testpassword200
        };

        const response = await request(app)
          .post("/api/user/signup")
          .send(newUser);

        expect(response.statusCode).toEqual(200);
        expect(response.body.accessToken).toBeDefined();
      });

      it("should return a 409 status code when the username already exists", async () => {
        const existingUser = {
          userName: "testuser",
          password: "testpassword",
          confirmedPassword: "testpassword",
        };

        // Sign up the existing user first
        await request(app).post("/api/user/signup").send(existingUser);

        // Attempt to sign up the same user again
        const response = await request(app)
          .post("/api/user/signup")
          .send(existingUser);

        expect(response.statusCode).toEqual(409);
        expect(response.body.error).toBeDefined();
      });
    });

    describe("Check if invalid username or password", () => {
      it("Test Case 1", async () => {
        const invalidUser = {
          userName: "",
          password: "",
          confirmedPassword: "",
        };

        const response = await request(app)
          .post("/api/user/signup")
          .send(invalidUser);
        expect(response.statusCode).toEqual(400);
        // expect(response.body.error)
      });
    });

    describe("Check if password confirmation mismatch", () => {
      test("should return 400 for password confirmation mismatch", async () => {
        const mismatchUser = {
          userName: "testuser",
          password: "testpassword",
          confirmedPassword: "differentpassword",
        };

        const response = await request(app)
          .post("/api/user/signup")
          .send(mismatchUser);
        expect(response.statusCode).toEqual(400);
        // expect(response.body.error)
      });
    });

    describe("Check if an existing username", () => {
      it("Test Case 1", async () => {
        const existingUser = {
          userName: "testuser",
          password: "testpassword",
          confirmedPassword: "testpassword",
        };

        const response = await request(app)
          .post("/api/user/signup")
          .send(existingUser);
        expect(response.statusCode).toEqual(409);
      });
    });
  });

  // Sign In
  describe("Sign In", () => {
    describe("Check If Username Or Password Is Missing.", () => {
      it("Test Case 1", async () => {
        const response = await request(app).post(`/api/user/signin`).send({});
        expect(response.statusCode).toEqual(400);
      });
    });
    describe("Check If Username Is Not Found.", () => {
      it("Test Case 1", async () => {
        const response = await request(app)
          .post(`/api/user/signin`)
          .send({ username: "unknown", password: "123456" });
        expect(response.statusCode).toEqual(400);
      });
    });
    describe("Check If Password Is Incorrect", () => {
      it("Test Case 1", async () => {
        const response = await request(app)
          .post(`/api/user/signin`)
          .send({ userame: "chuong5", password: "invalid" });
        expect(response.statusCode).toEqual(400);
      });
    });
    describe("Check If Username and Password Are Correct", () => {
      it("Test Case 1", async () => {
        const response = await request(app)
          .post(`/api/user/signin`)
          // .send({ userName: users[0].userName, password: users[0].password });
          .send({ userName: "chuong5", password: "1234" });
        expect(response.statusCode).toEqual(200);
      });
    });
  });
});
