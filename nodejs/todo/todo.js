const fs = require("fs");
const filePath = "./tasks.json";

const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const JSONBuffer = dataBuffer.toString();
    return JSON.parse(JSONBuffer);
  }
  catch (error){
    return [];
  }
}

const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath , dataJSON);
}

function addTask(task)
{
  const tasks = loadTasks();
  tasks.push({task});
  saveTasks(tasks);
  console.log("Task added", task);
}

const listTasks = () => {
  const tasks = loadTasks();
  tasks.forEach((task, index) => console.log(`${index + 1} - ${task.task}`));
};

const command = process.argv[2];
const arguments = process.argv[3];

if (command === "add"){
  addTask(arguments);
}
else if (command === "list"){
  listTasks(arguments);
}
else if (command === "remove"){
  removeTasks(parseInt(arguments));
}else{
  console.log("Command not found");
}

