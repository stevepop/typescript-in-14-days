import { Task } from './task';

let tasks: Task[] = [];

function addTask(title: string, dueDate?: Date): void {
  const newTask = new Task(title, dueDate);
  tasks.push(newTask);
}

function toggleTaskCompletion(id: number): void {
  const task = tasks.find(t => t['id'] === id);
  if (task) {
    task.toggleCompletion();
  }
}

function updateTaskTitle(id: number, newTitle: string): void {
  const task = tasks.find(t => t['id'] === id);
  if (task) {
    task.title = newTitle; // Using the setter to update the title
  }
}

addTask('Learn TypeScript');
addTask('Build Task Manager', new Date('2024-12-01'));

console.log(tasks.map(task => task.getDetails())); // Get details of all tasks
updateTaskTitle(1, 'Master TypeScript');
console.log(tasks.map(task => task.getDetails())); // Check if title was updated