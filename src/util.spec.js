test("should output name and age", () => {
  // Arrange / Given
  const { generateText } = require("./util");
  // Act / When
  const text = generateText("Test", "29");
  // Assert / Then
  expect(text).toBe("Test (29 years old)");
});
