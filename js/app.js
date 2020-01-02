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
    console.log("hello")
    var item = document.createElement("li")
    item.innerHTML = newTask;
    document.getElementById("tasklist").appendChild(item);
    var endBreak = document.createElement("BR");
    document.getElementById("tasklist").appendChild(endBreak)
  }
  document.getElementById("newTask").value = "";
}



/// make priority, strikethrough, delete. edit the array when doing so
