const { generateText, validateInput, createElement } = require("./util");

test("should output name and age", () => {
  // Arrange / Given

  // Act / When
  const text = generateText("Test", "29");
  // Assert / Then
  expect(text).toBe("Test (29 years old)");
});

describe("validates input", () => {
  test("should retun false if argument is undefined", () => {
    // Act
    const isValid = validateInput(undefined, false);
    // Assert
    expect(isValid).toBe(false);
  });

  test("should retun false if argument is empty string", () => {
    // Act
    const isValid = validateInput("  ", false);
    // Assert
    expect(isValid).toEqual(false);
  });

  test("should retun false if number input is not a number", () => {
    // Act
    const isValid = validateInput("abs", true);
    // Assert
    expect(isValid).toEqual(false);
  });

  test("should retun true if number input is valid", () => {
    // Act
    const isValid = validateInput("abs", false);
    // Assert
    expect(isValid).toEqual(true);
  });
});

describe("creates element", () => {
  test("should add class to element", () => {
    const element = createElement("li", "text here", "class-name");
    expect(element.classList.contains("class-name")).toBe(true);
  });
});
