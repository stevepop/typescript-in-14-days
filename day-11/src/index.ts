import { TaskManager } from './task-manager';

const taskManager = new TaskManager();

taskManager.addTask('Learn TypeScript', false);
taskManager.addTask('Build Task Manager', false);
taskManager.addTask('Test the app', true);
taskManager.addTask('Review TypeScript notes', false);
taskManager.markTaskAsCompleted(1);
console.log(taskManager.listAllTasks().map(task => task)); 
