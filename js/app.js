window.onload = function() {
  document.getElementById("createTaskButton").onclick = addTask;
}

let theCheckboxes = [];
let theTasks = [];
let priorityButtons = [];
let theStars = [];
let deleteButtons = [];
let theTrash = [];
let taskNumber = 0

addTask = function() {
  console.log("hi")
  var newTask = document.getElementById("newTask").value;
  console.log(newTask)
  if (newTask === '') {
    alert("Task cannot be blank.");
  }
  else {
    var unchecked = document.createElement("IMG")
    unchecked.innerHTML = "<img src='images/uncheckedcircle.png' width='14' height='14'>";
    theCheckboxes.push(unchecked)

    theTasks.push(newTask)

    var priorityButton = document.createElement("BUTTON");
    priorityButtons.push(priorityButton)
    var emptyStar = document.createElement("IMG")
    emptyStar.innerHTML = "<img src='images/emptystar.png' width='14' height='14'>";
    theStars.push(emptyStar)
    priorityButton.appendChild(emptyStar)

    var trashButton = document.createElement("BUTTON");
    trashButton.onclick = deleteTask;
    deleteButtons.push(trashButton)
    var trashcan = document.createElement("IMG")
    trashcan.innerHTML = "<img src='images/trashcan.png' width='14' height='14'>";
    theTrash.push(trashcan)
    trashButton.appendChild(trashcan)

    console.log("what")


  }
  showTask()
  document.getElementById("newTask").value = "";
  taskNumber++
}


const showTask = function() {
  console.log("bae")
  var listContainer = document.getElementById("listContainer")
  listContainer.appendChild(newTask, priorityButton, trashButton)
}


const deleteTask = function() {
  console.log("delete")
}
