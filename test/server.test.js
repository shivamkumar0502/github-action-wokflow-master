const request = require("supertest");
const app = require("../server");

describe("API endpoints", () => {
  test("GET /hello returns the expected message", async () => {
    const response = await request(app).get("/hello");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello from Coder Army! Welcome back");
  });

  test("GET /bye returns the expected message", async () => {
    const response = await request(app).get("/bye");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Bye Bye!");
  });

  test("GET /hi returns the expected message", async () => {
    const response = await request(app).get("/hi");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("I am saying Hi!");
  });
});
