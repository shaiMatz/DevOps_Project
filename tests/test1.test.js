const request = require("supertest");
const app = require("../server.js");
const script = require("../src/script.js");


describe("Testing root path:", () => {
  test("HTTP Request check", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });

  test("HTTP Wrong Request check", () => {
    return request(app)
      .get("/123")
      .then((response) => {
        expect(response.statusCode).toBe(404);
      });
  });
})

describe("Testing form validation:", () => {
  test("Valid name input should return true", () => {
    const input = "John Doe";
    const result = script.validateName(input);
    expect(result).toBe(true);
  });

  test("Name input containing digits should return false", () => {
    const input = "John123";
    const result = script.validateName(input);
    expect(result).toBe(false);
  });

  test("Name input containing special characters should return false", () => {
    const input = "John@Doe";
    const result = script.validateName(input);
    expect(result).toBe(false);
  });
})

