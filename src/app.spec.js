beforeEach(() => {
  // Arrange
  document.body.innerHTML = `
    <body>
        <section class="control-panel">
            <!-- Name input  -->
            <div class="input-container">
            <label for="name">Name</label>
            <input type="text" id="name" />
            </div>
            <!-- Age input -->
            <div class="input-container">
            <label for="age">Age</label>
            <input type="number" id="age" />
            </div>
            <!-- Button -->
            <button id="btnAddUser" class="button">Add User</button>
        </section>
        <hr />
        <!-- List -->
        <section class="user-output">
            <ul class="user-list"></ul>
        </section>
        <script src="../dist/main.js"></script>
    </body>
  `;
  require("./app");
});

test("should add valid item to list", () => {
  // Act
  const newUserNameInput = document.querySelector("input#name");
  const newUserAgeInput = document.querySelector("input#age");

  newUserNameInput.value = "Mike";
  newUserAgeInput.value = 23;

  const newUserButton = document.querySelector("#btnAddUser");
  newUserButton.click();

  // Assert
  const userList = document.querySelector(".user-list");
  expect(userList.children.length).toBe(1);
});

test("should not add valid item to list", () => {
  // Act
  const newUserNameInput = document.querySelector("input#name");
  const newUserAgeInput = document.querySelector("input#age");

  newUserNameInput.value = "   ";
  newUserAgeInput.value = "";

  const newUserButton = document.querySelector("#btnAddUser");
  newUserButton.click();

  // Assert
  const userList = document.querySelector(".user-list");
  expect(userList.children.length).toBe(0);
});
