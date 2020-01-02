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
    document.getElementById("tasklist").appendChild(item);
    var endBreak = document.createElement("BR");
    document.getElementById("tasklist").appendChild(endBreak)
    var newbutton = document.createElement("");
    document.getElementById("tasklist").appendChild(endBreak)
  }
  document.getElementById("newTask").value = "";
}

const markPriority = function() {

}

const deleteTask = () {
  var close = document.getElementsByClassName("close");
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
