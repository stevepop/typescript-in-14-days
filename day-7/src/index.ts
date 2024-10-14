import { Task } from "./task";
import { TaskManager } from "./task-manager";

const taskManager = new TaskManager<Task>();

taskManager.addTask(new Task('Learn TypeScript'));
taskManager.addTask(new Task('Build Task Manager'));

console.log(taskManager.getTasks().map(task => task.getDetails()));

