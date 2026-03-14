const defaultTasks = [
  { id: 1, title: "Design login page", status: "todo" },
  { id: 2, title: "Create database schema", status: "todo" },
  { id: 3, title: "Build API endpoints", status: "in-progress" },
  { id: 4, title: "Project setup", status: "done" }
];

let tasks = [ ];

const savedTasks = localStorage.getItem("tasks");

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

if (savedTasks) {
  tasks = JSON.parse(savedTasks);
} else {
  tasks = defaultTasks;
  saveTasks();
}

const todoColumn = document.getElementById("todo-column");
const inProgressColumn = document.getElementById("in-progress-column");
const doneColumn = document.getElementById("done-column");

function renderTasks() {

  todoColumn.innerHTML = "<h3>To Do</h3>";
  inProgressColumn.innerHTML = "<h3>In Progress</h3>";
  doneColumn.innerHTML = "<h3>Done</h3>";

  tasks.forEach(function (task) {

    const taskCard = document.createElement("div");
    taskCard.className = "task-card";
    taskCard.innerHTML = ` <div>${task.title}</div> <button class="move-btn">Move</button> <button class="delete-btn">Delete</button> `;

    if (task.status === "todo") {
      todoColumn.appendChild(taskCard);
    }

    if (task.status === "in-progress") {
      inProgressColumn.appendChild(taskCard);
    }

    if (task.status === "done") {
      doneColumn.appendChild(taskCard);
    }

    const deleteButton = taskCard.querySelector(".delete-btn");

    deleteButton.addEventListener("click", function () {

      tasks = tasks.filter(function (t) {
        return t.id !== task.id;
      });

      saveTasks();
      renderTasks();

    });

    const moveButton = taskCard.querySelector(".move-btn");

    moveButton.addEventListener("click", function () {

      if (task.status === "todo") {
        task.status = "in-progress";
      } else if (task.status === "in-progress") {
        task.status = "done";
      } else {
        task.status = "todo";
      }

      saveTasks();
      renderTasks();

    });

    
  });
}

const input = document.getElementById("task-input");
const statusSelect = document.getElementById("status-select");
const addButton = document.getElementById("add-task-btn");

addButton.addEventListener("click", function () {

  if (input.value.trim() === "") {
    return;
  }

  const newTask = {
    id: Date.now(),
    title: input.value.trim(),
    status: statusSelect.value
  };

  tasks.push(newTask);

  input.value = "";
  saveTasks();
  renderTasks();

});

renderTasks();

