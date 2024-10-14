import { Task } from './task';

export class TaskManager {
  private tasks: Task[] = [];

  addTask(title: string): Task {
    const newTask = new Task(this.tasks.length + 1, title);
    this.tasks.push(newTask);
    return newTask;
  }

  removeTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  toggleTaskCompletion(id: number): void {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.toggleCompletion();
    }
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }
}