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
    taskList.className = "close"
    document.getElementById("listContainer").appendChild(taskList)

    var theCheckbox = document.createElement("input")
    theCheckbox.type = "checkbox"
    theCheckbox.id = "elcheckbox"
    taskList.appendChild(theCheckbox)

    taskValue = document.createTextNode(newTask);
    taskValue.class = "close"
    taskList.appendChild(taskValue)

    var priorityButton = document.createElement("BUTTON");
    var emptyStar = document.createElement("j")
    emptyStar.innerHTML = "<img src='images/emptystar.png' width='14' height='14'>";
    priorityButton.id = "prioritything"
    emptyStar.class = "emptystar"
    priorityButton.appendChild(emptyStar);
    taskList.appendChild(priorityButton)
    priorityButton.onclick = markPriority;

    var trashButton = document.createElement("BUTTON");
    var trashcan = document.createElement("i")
    trashcan.innerHTML = "<img src='images/trashcan.png' width='14' height='14'>";
    trashButton.id = "trashButton"
    trashcan.class = "trashicon"
    trashButton.onclick = deleteTask;

    trashButton.appendChild(trashcan);
    taskList.appendChild(trashButton)

    var endBreak = document.createElement("BR");
    taskList.appendChild(endBreak)

    document.getElementById("newTask").value = "";
    // var span = document.createElement("SPAN");
    // span.className = "close";
    // taskList.appendChild(span)
    }
  }


const deleteTask = function() {
  let taskList;
  console.log("hi")
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      tasks.splice(i);
  }
  console.log(tasks)
  addTask();
  }
}


// maybe do something like the close thing except put class on each object in the list and then remove it??
// push each into the same array and be li

markPriority = function() {



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
