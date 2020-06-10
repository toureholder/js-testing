const puppeteer = require("puppeteer");

test("should submit form", async () => {
  // Arrange
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: true,
  });

  const page = await browser.newPage();
  await page.goto(
    "file:///C:/Users/toureholder/wiz/chapter/testing/js-testing-introduction/src/index.html"
  );

  //Act
  const nameInput = "input#name";
  const ageInput = "input#age";
  const button = "button#btnAddUser";

  await page.click(nameInput);
  await page.type(nameInput, "Anna");

  await page.click(ageInput);
  await page.type(ageInput, "28");

  await page.click(button);

  //Assert
  const text = await page.$eval("li", (el) => el.textContent);

  expect(text).toContain("Anna");

  await browser.close();
});
