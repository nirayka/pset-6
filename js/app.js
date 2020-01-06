window.onload = function() {
  document.getElementById("createTaskButton").onclick = addTask;
}


const addTask = function() {
  var newTask = document.getElementById("newTask").value;
  if (newTask === '') {
    alert("Task cannot be blank.");
  }
  var tasks = []
  tasks.push(newTask);
  if (newTask !== '') {
    var taskList = document.createElement("li")
    document.getElementById("listContainer").appendChild(taskList)

    var theCheckbox = document.createElement("input")
    theCheckbox.type = "checkbox"
    theCheckbox.id = "elcheckbox"
    taskList.appendChild(theCheckbox)

    taskValue = document.createTextNode(newTask);
    console.log(taskValue)
    taskList.appendChild(taskValue)

    var priorityButton = document.createElement("BUTTON");
    var emptyStar = document.createElement("j")
    emptyStar.innerHTML = "<img src='images/emptystar.png' width='14' height='14'>";
    priorityButton.id = "prioritything"
    emptyStar.class = "emptystar"
    priorityButton.appendChild(emptyStar);
    taskList.appendChild(priorityButton)

    var trashButton = document.createElement("BUTTON");
    var trashcan = document.createElement("i")
    trashcan.innerHTML = "<img src='images/trashcan.png' width='14' height='14'>";
    trashButton.id = "trashButton"
    trashcan.class = "trashicon"

    trashButton.appendChild(trashcan);
    taskList.appendChild(trashButton)

    var endBreak = document.createElement("BR");
    taskList.appendChild(endBreak)

  }
  document.getElementById("newTask").value = "";
  // document.getElementById("taskText").value = "";
  // document.getElementById("uncheckedButton").value = "";
  // document.getElementById("trashButton").value = "";
}

document.getElementById("trashButton").onclick = deleteTask;

const deleteTask = function() {
  for (i = 0; i < taskList.length; i++) {
    taskListItem = taskListChild
  }

}



document.getElementById("markPriorityButton").onclick = markPriority; {



}


const enterKey = function() {
  if (event.keyCode === 13 || event.which === 13) {
    addTask();
  }
}


  // var close = document.getElementsByClassName("closeButton");
  // var i;
  // for (i = 0; i < close.length; i++) {
  // close[i].onclick = function() {
  //   var div = this.parentElement;
  //  div.style.display = "none";
  //   }
  // }
