const request = require("supertest");
const app = require("../server.js");

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

// describe("validateName", () => {
//   test("returns true for valid name", () => {
//     expect(script.validateName("John")).toBe(true);
//     expect(script.validateName("john")).toBe(true);
//     expect(script.validateName("John Doe")).toBe(true);
//     expect(script.validateName("john Doe")).toBe(true);
//   });
// });
//   test('validateName returns false for invalid names', () => {
//     expect(validateName("1234")).toBe(false);
//     expect(validateName("jane 1doe")).toBe(false);
//     expect(validateName("John -+Doe")).toBe(false);
//   });

// });

// describe('saveFormToLocalStorage', () => {
//   test('saves form data to local storage', () => {
//     const student = {
//       name: 'John',
//       grade1: 80,
//       grade2: 85,
//       grade3: 90,
//     };

//     saveFormToLocalStorage(student);

//     const gradesData = localStorage.getItem('grades');
//     const expectedCSVString = 'John,80,85,90\n';

//     expect(gradesData).toEqual(expectedCSVString);
//   });
// });

// test('handleSubmit resets the form after saving data to localStorage', () => {
//     // Mock the localStorage.setItem method
//     const localStorageMock = {
//       getItem: jest.fn(),
//       setItem: jest.fn()
//     };
//     global.localStorage = localStorageMock;

//     // Create form data
//     const formData = new FormData();
//     formData.append('name', "Jane");
//     formData.append('grade1', 85);
//     formData.append('grade2', 90);
//     formData.append('grade3', 95);

//     // Create event object with form data
//     const event = {
//       preventDefault: jest.fn(),
//       target: {
//         elements: formData
//       }
//     };

//     // Call the handleSubmit function
//     handleSubmit(event);

//     // Test that the form is reset
//     expect(document.getElementById("myForm").reset).toHaveBeenCalled();
//   });
