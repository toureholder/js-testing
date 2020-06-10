const { generateText, createElement, validateInput } = require("./util");
const { fetchData } = require("./http");

const initApp = () => {
  // Initializes the app, registers the button click listeners
  const newUserButton = document.querySelector("#btnAddUser");
  newUserButton.addEventListener("click", addUser);

  const loadDataButton = document.querySelector("#btnLoadData");
  loadDataButton.addEventListener("click", printTitle);
};

const addUser = () => {
  // Fetches the user input, creates a new HTML element based on it
  // and appends the element to the DOM
  const newUserNameInput = document.querySelector("input#name");
  const newUserAgeInput = document.querySelector("input#age");

  if (
    !validateInput(newUserNameInput.value, false) ||
    !validateInput(newUserAgeInput.value, true)
  ) {
    return;
  }

  const userList = document.querySelector(".user-list");
  const outputText = generateText(
    newUserNameInput.value,
    newUserAgeInput.value
  );
  const element = createElement("li", outputText, "user-item");
  userList.appendChild(element);
};

const loadTitle = () => {
  return fetchData().then((response) => response.title);
};

const printTitle = () => {
  loadTitle().then((title) => {
    console.log(title);
  });
};

// Start the app!
initApp();
