// test/api.test.js
import { describe, expect, test, beforeAll, afterAll, it } from "@jest/globals";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";

import app from "../src/index";

const mongod = new MongoMemoryServer();

let token = "";

beforeAll(async () => {
  const response = await request(app).post("/auth/login").send({
    name: "HH",
    password: "12345",
  });

  token = response.body.token;
});

/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.MONGO_TEST_URI || "");
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

describe("API Tests", () => {
  it("should return a 401 response on GET /calculate", (done) => {
    request(app)
      .get("/calculate")
      .then((res: any) => {
        expect(res.status).toBe(401);
        done();
      })
      .catch((err: any) => {});
  });
  it("should return a history of user calculations", (done) => {
    request(app)
      .get("/calculate")
      .set({
        Authorization: `Bearer ${token}`,
      })
      .then((res: any) => {
        expect(res.status).toBe(200);
        expect(res.body.data).toHaveLength(0);
        done();
      })
      .catch((err: any) => {});
  });
  it("should return the sum of 2+2 = 4", (done) => {
    request(app)
      .post("/calculate")
      .send({
        expression: "2+2",
      })
      .set({
        Authorization: `Bearer ${token}`,
      })
      .then((res: any) => {
        expect(res.status).toBe(200);
        expect(res.body.result).toBe(4);
        done();
      })
      .catch((err: any) => {});
  });

  it("should create a user if name does not exist", (done) => {
    request(app)
      .post("/auth/sign-up")
      .send({
        name: "HH",
        password: "12345",
      })
      .then((res: any) => {
        expect(res.status).toBe(200);
        expect(res.status).toBe(400);
        done();
      })
      .catch((err: any) => {});
  });

  // Add more test cases here
});
