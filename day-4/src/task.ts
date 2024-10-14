import { TaskId, Task } from './types';

let tasks: Task[] = [
  { id: 1, title: 'Learn TypeScript', completed: false },
  { id: 2, title: 'Build a Task Manager app', completed: false },
  { id: 3, title: 'Test Task Manager app', completed: false }
];

function addTask(title: string): void {
    const newTask: Task = {
      id: tasks.length + 1,
      title: title,
      completed: false
    };
    tasks.push(newTask);
    console.log(`Task "${title}" has been added.`);
  }

function toggleTaskCompletion(id: TaskId): void {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        console.log(`Task "${task.title}" marked as ${task.completed ? 
        'completed' : 'incomplete'}.`);
    } else {
        console.log(`Task with id: ${id} not found.`);
    }
  }

function removeTask(id: TaskId): void {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        console.log(`Task with id: ${id} has been removed.`);
    } else {
        console.log(`Task with id: ${id} not found.`);
    }
}

function getCompletedTasks(): Task[] {
    return tasks.filter(task => task.completed);
}
  
addTask('Review TypeScript functions');
console.log(tasks);

toggleTaskCompletion(1);
console.log(tasks);

removeTask(3);
console.log(tasks);

const completedTasks = getCompletedTasks();
console.log('Completed tasks:', completedTasks);