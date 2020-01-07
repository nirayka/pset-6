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

let elementSet = [];

// html row is listSection.

addTask = function() {
  var newTask = document.getElementById("newTask").value;
  console.log(newTask)
  if (newTask === '') {
    alert("Task cannot be blank.");
  }
  else {
    let taskObject = {
      listSection: null,
      finished: false,
      task: newTask,
      priority: false,
      deleted: null
    }
    elementSet.push(taskObject);

    var theParentElement = document.getElementsByClassName("listThing")

    let x = elementSet.indexOf(taskObject);

    elementSet[x].listSection = document.createElement("li");
    elementSet[x].listSection.class = "listThing";
    document.getElementById("listContainer").append(elementSet[x].listSection);

    elementSet[x].checkBoxButton = document.createElement("INPUT")
    elementSet[x].checkBoxButton.type = "checkbox"
    elementSet[x].checkBoxButton.class = "finished"
    elementSet[x].listSection.append(elementSet[x].checkBoxButton);

    elementSet[x].taskText = document.createTextNode(newTask)
    elementSet[x].taskText.class = "task"
    elementSet[x].listSection.appendChild(elementSet[x].taskText);

    elementSet[x].priorityButton = document.createElement("BUTTON");
    elementSet[x].priorityButton.class = "priority"
    elementSet[x].priorityButton.innerHTML = "!";
    elementSet[x].listSection.append(elementSet[x].priorityButton);

    elementSet[x].deleteButton = document.createElement("BUTTON");
    elementSet[x].deleteButton.setAttribute.class = "deleted"
    elementSet[x].deleteButton.innerHTML = "X";
    elementSet[x].listSection.append(elementSet[x].deleteButton);
  }
  document.getElementById("newTask").value = "";
  taskNumber++
}


stupid = function() {
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


const showTask = function() {
  console.log("bae")
  var listContainer = document.getElementById("listContainer")
  listContainer.appendChild(newTask, priorityButton, trashButton)
}


const deleteTask = function() {
  console.log("delete")
}
