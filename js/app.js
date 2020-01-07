window.onload = function() {
  document.getElementById("createTaskButton").onclick = addTask;
}



let theCheckboxes = [];
let theTasks = [];
let theStars = [];
let theTrash = [];

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

    var emptyStar = document.createElement("IMG")
    emptyStar.innerHTML = "<img src='images/emptystar.png' width='14' height='14'>";


  }
  showTask()
  document.getElementById("newTask").value = "";
}


const showTask = function() {
  console.log("bae")
}
