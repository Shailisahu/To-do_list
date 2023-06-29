function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    
    if (taskInput.value.trim() !== "") {
      var taskItem = document.createElement("li");
      taskItem.className = "task-item";
      
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      
      var taskText = document.createElement("span");
      taskText.textContent = taskInput.value;
      
      // taskItem.appendChild(checkbox);
      taskItem.appendChild(taskText);
      taskList.appendChild(taskItem);
      
      taskInput.value = "";
    }
  }