jest.mock("./http");

const { loadTitle } = require("./data.service");

test("should load data", () => {
  loadTitle().then((response) => {
    expect(response).toBe("json-server");
  });
});
