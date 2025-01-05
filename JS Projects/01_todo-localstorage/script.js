

// Wait for the DOM (Document Object Model) to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {

    // Select the input field where the user will type tasks
    const todoInput = document.getElementById('todo-input');

    // Select the button that adds tasks
    const addTaskButton = document.getElementById('add-task-btn');

    // Select the container (unordered list) where tasks will be displayed
    const todoList = document.getElementById('todo-list');

    // Initialize an array to store tasks, loading from local storage if available
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Render all tasks from local storage on page load
    tasks.forEach((task) => renderTask(task));

    // Add a click event listener to the "Add Task" button
    addTaskButton.addEventListener('click', () => {
        // Get the value of the input field, trimmed to remove extra whitespace
        const taskText = todoInput.value.trim();

        // If the input is empty, do nothing and return
        if (taskText === "") return;

        // Create a new task object with a unique ID, the task text, and a default completion status of false
        const newTask = {
            id: Date.now(), // Unique ID based on the current timestamp
            text: taskText,
            completed: false,
        };

        // Add the new task to the tasks array
        tasks.push(newTask);

        // Save the updated tasks array to local storage
        saveTasks();

        // Render the new task on the webpage
        renderTask(newTask);

        // Clear the input field for the next task
        todoInput.value = "";

        // Log the updated tasks array to the console for debugging
        console.log(tasks);
    });

    /**
     * Function to render a single task in the DOM
     * @param {Object} task - The task object to render
     */
    function renderTask(task) {
        // Create a new list item (li) element
        const li = document.createElement("li");

        // Add a unique identifier to the li element for the task
        li.setAttribute("data-id", task.id);

        // If the task is marked as completed, add a CSS class for styling
        if (task.completed) {
            li.classList.add("completed");
        }

        // Set the HTML content of the list item, including the task text and a delete button
        li.innerHTML = `
        <span>${task.text}</span>
        <button>delete</button>
        `;

        // Add an event listener to toggle the task's completion status when clicked
        li.addEventListener("click", (e) => {
            // Ignore the event if the click was on the delete button
            if (e.target.tagName === "BUTTON") return;

            // Toggle the completion status of the task
            task.completed = !task.completed;

            // Toggle the "completed" CSS class for the li element
            li.classList.toggle("completed");

            // Save the updated tasks array to local storage
            saveTasks();
        });

        // Add an event listener for the delete button inside the li element
        li.querySelector("button").addEventListener("click", (e) => {
            // Prevent the click event from affecting the parent li's click handler
            e.stopPropagation(); // prevent toggle from firing

            // Filter out the task being deleted from the tasks array
            tasks = tasks.filter(t => t.id !== task.id);

            // Remove the li element from the DOM
            li.remove();// iss ek line ke karan vo seedha click krne par nhi hata tha page vapis reload krna pada tha

            // Save the updated tasks array to local storage
            saveTasks();
        });

        // Append the newly created li element to the todo list (ul element)
        todoList.appendChild(li);
    }

    /**
     * Function to save the tasks array to local storage
     */
    function saveTasks() {
        // Convert the tasks array to a JSON string and store it in local storage
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});


// what we want to do is as soon as the page loads from the local storage grab all the tasks store the tasks inside the tasks array(line 79) and then immediately after that i am running a loop inside the loop inside the loop i read all the individual tasks from tasks array(line 79) and call the method renderTask on each of the task so that it can actually go ahead and render it

// First render the task and when the task is being rendered just delete the task
//
// Render is displaying the things on dom

