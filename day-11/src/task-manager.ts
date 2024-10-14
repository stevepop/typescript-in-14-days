import { Task } from './task';

function logClassCreation(constructor: Function) {
  console.log(`TaskManager class is being created.`);
}

@logClassCreation  // Decorator
export class TaskManager {
    tasks: Task[] = [];
    currentId = 1;
    // Add task
    addTask(title: string, completed: boolean) {
        const task: Task = {
            id: this.currentId++,
            title,
            completed
        };
        this.tasks.push(task);
    }
    // List tasks
    listAllTasks() {
        return this.tasks;
    }
    // Get task by id
    getTaskById(taskId: number) {
        return this.tasks.find(task => task.id === taskId);
    }
    // Mark task as completed
    markTaskAsCompleted(taskId: number) {
        console.log(`Completing task ${taskId}`);
        const task = this.getTaskById(taskId);
        if (task) {
            task.completed = true;
        }
    }
    // Delete task
    deleteTask(taskId: number) {
        const index = this.tasks.findIndex(task => task.id === taskId);
        if (index === -1) {
            return;
        }
        this.tasks.splice(index, 1);
    }
}