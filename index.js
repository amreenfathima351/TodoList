document.addEventListener("DOMContentLoaded", function () {
  const plusButton = document.querySelector(".plus");
  const todoInput = document.querySelector(".todo-input");
  const container = document.querySelector(".container");

  plusButton.addEventListener("click", function () {
    const input = todoInput.value.trim();

    if (input === "") {
      alert("Please enter something!");
    } else {
      const listItem = document.createElement("li");
      listItem.className = "todo-list";

      const checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      checkBox.className = "check";

      const editButton = document.createElement("button");
      editButton.className = "editBtn";
      editButton.innerHTML = "<i class='fa-solid fa-edit'></i>";

      const deleteButton = document.createElement("button");
      deleteButton.className = "delBtn";
      deleteButton.innerHTML = "<i class='fa-solid fa-trash'></i>";

      const actions = document.createElement("div");
      actions.className = "actions";
      actions.append(editButton, deleteButton);

      const taskText = document.createElement("span");
      taskText.textContent = input;

      listItem.append(checkBox, taskText, actions);
      container.append(listItem);

      todoInput.value = "";

      deleteButton.addEventListener("click", function () {
        listItem.remove();
      });

      editButton.addEventListener("click", function () {
        const currentText = taskText.textContent.trim();
        const newText = prompt("Edit task:", currentText);
        if (newText !== null && newText.trim() !== "") {
          taskText.textContent = newText;
        }
      });

      checkBox.addEventListener("click", function () {
        if (checkBox.checked) {
          listItem.classList.add("checked");
        } else {
          listItem.classList.remove("checked");
        }
      });
    }
  });
});
