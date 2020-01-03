window.onload = function() {
  document.getElementById("createTaskButton").onclick = addTask;
  document.getElementById("markPriorityButton").onclick = markPriority;
  document.getElementById("deleteTaskButton").onclick = markPriority;
}


const addTask = function() {
  var newTask = document.getElementById("newTask").value;
  if (newTask === '') {
    alert("Task cannot be blank.");
  }
  var tasks = []
  tasks.push(newTask);
  if (newTask !== '') {
    var item = document.createElement("li")
    item.innerHTML = newTask;
    item.id = "taskText"
    document.getElementById("tasklist").appendChild(item);
    var uncheckedButton = document.createElement("BUTTON");
    uncheckedButton.innerHTML = "<img src='images/uncheckedcircle.png' width='13' height='13'>";
    uncheckedButton.id = "uncheckedButton"
    document.getElementById("taskText").appendChild(uncheckedButton)

    var trashButton = document.createElement("BUTTON");
    trashButton.innerHTML = "<img src='images/trashcan.png' width='13' height='13'>";
    trashButton.id = "trashButton"
    document.getElementById("uncheckedButton").appendChild(trashButton)

    var endBreak = document.createElement("BR");
    document.getElementById("trashButton").appendChild(endBreak)
  }
  document.getElementById("newTask").value = "";
}

const markPriority = function() {

}

const deleteTask = function() {
  var close = document.getElementsByClassName("closeButton");
  var i;
  for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    }
  }
}

// matt says to create span and then prepend elements?????

/// make priority, strikethrough, delete. edit the array when doing so
