document.addEventListener("DOMContentLoaded",function(){
const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function addTask() {
  const taskText = taskInput.value.trim();

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
}

addButton.addEventListener('click',addTask);

taskInput.addEventListener('keypress', (event)=>{
  if(event.key === "Enter"){
    addTask();
  }
});
addTask();
});




