document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const inputBox = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const taskDescription = inputBox.value.trim();
    if (taskDescription !== "") {
      const listItem = document.createElement("li");
      listItem.textContent = taskDescription;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "❌";
      deleteButton.addEventListener("click", function() {
        listItem.remove();
      });

      listItem.appendChild(deleteButton);
      taskList.appendChild(listItem);
      inputBox.value = "";
    } else {
      alert("Please enter a task description.");
    }
  });
});
