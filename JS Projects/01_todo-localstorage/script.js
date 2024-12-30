document.addEventListener('DOMContentLoaded', () => {
  let toDoInput= document.getElementById("todo-input");
  let toDoList = document.getElementById("todo-list");
  let addTaskButton =document.getElementById("add-task-btn");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || []; //every task has been added to the task array

  tasks.forEach(task => renderTask(task));

  addTaskButton.addEventListener("click", () =>  {

    const taskText = toDoInput.value.trim();
    if(taskText === "") {
      return;
    }

    const newTask = {
      id: Date.now,
      text: taskText,
      completed: false,
    };

    tasks.push(newTask);
    saveTasks();
    //Here it do not update the tasks here, it totally updates the whole local storage once at a time
    toDoInputvalue = ""
    console.log(tasks);
  });

  function renderTask(task){
    console.log(task);
  }

  function saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
})