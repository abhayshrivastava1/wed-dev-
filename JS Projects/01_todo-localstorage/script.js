// document.addEventListener('DOMContentLoaded', () => {
//   let toDoInput= document.getElementById("todo-input");
//   let toDoList = document.getElementById("todo-list");
//   let addTaskButton =document.getElementById("add-task-btn");
//
//   let tasks = JSON.parse(localStorage.getItem("tasks")) || []; //every task has been added to the task array
//
//   tasks.forEach(task => renderTask(task));
//
//   addTaskButton.addEventListener("click", () =>  {
//
//     const taskText = toDoInput.value.trim();
//     if(taskText === "") {
//       return;
//     }
//
//     const newTask = {
//       id: Date.now(),
//       text: taskText,
//       completed: false,
//     };
//
//     tasks.push(newTask);
//     saveTasks();
//     //Here it do not update the tasks here, it totally updates the whole local storage once at a time
//     toDoInput.value = ""
//     console.log(tasks);
//   });
//
//   function renderTask(task){
//     // console.log(task.text);
//
//     const li = document.createElement('li');
//     li.setAttribute('data-id', task.id);
//     if(task.completed){
//       li.classList.add("completed");
//     }
//     li.innerHTML = `
//     <span>${task.text}</span>
//     <button>delete</button>
//     `;
//
//     li.addEventListener("click", (e)=>{
//       if(e.target.tagName === "BUTTON") return;
//       task.completed = !task.completed;
//       li.classList.toggle("completed");
//       saveTasks();
//     })
//
//     // just for buttons
//     li.querySelector('button').addEventListener('click', (e) => {
//       e.stopPropagation()// prevent toggle from firing
//       tasks=tasks.filter(t => t.id !== task.id)
//       saveTasks();
//     })
//
//
//     toDoList.appendChild(li);
//   }
//
//   function saveTasks(){
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }
// })
//
//
// // First render the task and when the task is being rendered just delete the task
//
// // Render is displaying the things on dom



document.addEventListener('DOMContentLoaded', () => {
    // Add a task in array

    const todoInput= document.getElementById('todo-input');
    const addTaskButton = document.getElementById('add-task-btn');
    const todoList = document.getElementById('todo-list');

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => renderTask(task));

    addTaskButton.addEventListener('click', () => {
        const taskText = todoInput.value.trim();

        if(taskText === "") return;

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: 'false'
        }
        tasks.push(newTask);
        saveTasks();
        todoInput.value = ""; //clear input
        console.log(tasks);

    });



// How to add the task to local storage from array


    function renderTask(task){
        console.log(task);

        const li = document.createElement('li');
    li.setAttribute('data-id', task.id);
    if(task.completed){
      li.classList.add("completed");
    }
    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>
    `;

    li.addEventListener("click", (e)=>{
      if(e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTasks();
    })

    // just for buttons
    li.querySelector('button').addEventListener('click', (e) => {
      e.stopPropagation()// prevent toggle from firing
      tasks=tasks.filter(t => t.id !== task.id)
      saveTasks();
    })


    toDoList.appendChild(li);


    }

    function saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

// what we want to do is as soon as the page loads from the local storage grab all the tasks store the tasks inside the tasks array(line 79) and then immediately after that i am running a loop inside the loop inside the loop i read all the individual tasks from tasks array(line 79) and call the method renderTask on each of the task so that it can actually go ahead and render it
})


