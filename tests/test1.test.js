const { JSDOM } = require('jsdom');
const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.window = window;
global.document = window.document;
const request = require("supertest");
const app = require("../server.js");
const {
  validateName,
  handleSubmit,
  saveFormToLocalStorage,
} = require("../src/script.js");

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
});

describe("Form Validation:", () => {
  test("Validate Name", () => {
    expect(validateName("John")).toBe(true);
    expect(validateName("john")).toBe(true);
    expect(validateName("John Doe")).toBe(true);
    expect(validateName("john Doe")).toBe(true);
    expect(validateName("1234")).toBe(false);
    expect(validateName("jane 1doe")).toBe(false);
    expect(validateName("John -+Doe")).toBe(false);
  });

  test("Handle Submit", () => {
    // Mock the localStorage.setItem method
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
    };

    global.localStorage = localStorageMock;

    // Create form data
    const formData = new FormData();
    formData.append("name", "Jane");
    formData.append("grade1", 85);
    formData.append("grade2", 90);
    formData.append("grade3", 95);

    formData.get("name").id = "name";
    formData.get("grade1").id = "grade1";
    formData.get("grade2").id = "grade2";
    formData.get("grade3").id = "grade3";

    // Create event object with form data
    const event = {
      preventDefault: jest.fn(),
      target: {
        elements: formData,
      },
    };

    // Call the handleSubmit function
    handleSubmit(event);

  });
});




