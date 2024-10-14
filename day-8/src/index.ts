import { Task } from "./task";
import { TaskManager } from "./task-manager";
import { logMessage, logError } from './utils';
import settings from './settings';

const taskManager = new TaskManager();
console.log(taskManager);
taskManager.addTask('Learn TypeScript');
taskManager.addTask('Build Task Manager');
taskManager.toggleTaskCompletion(1);

console.log(taskManager.getAllTasks().map(task => task.getDetails()));

logMessage('Everything is working!');
logError('Something went wrong!');

console.log(settings.theme); // Output: dark
