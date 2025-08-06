document.addEventListener("DOMContentLoaded",function(){
  loadTasks();
const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');


// load tasks from local storage
function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

  storedTasks.forEach(taskText =>addTask(taskText,false)); 
  
}



function addTask(taskText,save=true) {
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Enter a task");
  
  } 
  const listItem = document.createElement('li');
  listItem.textContent = taskText;

  const RemoveButton = document.createElement('button');
  RemoveButton.textContent = 'Remove';
  RemoveButton.classList.add('remove-btn');

  RemoveButton.onclick = function() {
    taskList.removeChild(listItem);
  }
  listItem.appendChild(RemoveButton);
  taskList.appendChild(listItem);
  taskInput.value = "";

  if(save){
    const storedTasks = JSON.parse(localStorage.getItem('tasks')|| '[]');

    storedTasks.push(taskText);
    localStorage.setItem('tasks',JSON.stringify(storedTasks))
  }
}

addButton.addEventListener('click',addTask);

taskInput.addEventListener('keypress', (event)=>{
  if(event.key === "Enter"){
    addTask();
  }
});
addTask();
});




