import { Task } from './task';

let tasks: Task[] = [
  { id: 1, title: 'Learn TypeScript', completed: false },
  { id: 2, title: 'Build Task Manager app', completed: false },
  { id: 3, title: 'Test the app', completed: true }
];

function addTask(title: string): void {
  const newTask: Task = {
    id: tasks.length + 1,
    title: title,
    completed: false
  };
  tasks.push(newTask);
}

function toggleTaskCompletion(taskId: number): void {
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    task.completed = !task.completed;
  }
}

function removeTask(id: number): void {
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    console.log(`Task with ID ${id} has been removed`);
  } else {
      console.log(`Task with ID ${id} not found`);
  }
}

addTask('Review TypeScript notes');
console.log(tasks);

toggleTaskCompletion(2);
console.log(tasks);

removeTask(2);
console.log(tasks);
