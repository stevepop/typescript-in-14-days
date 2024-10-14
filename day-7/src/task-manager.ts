class TaskManager<T> {
    private tasks: T[] = [];
  
    addTask(task: T): void {
      this.tasks.push(task);
    }
  
    getTasks(): T[] {
      return this.tasks;
    }
  }
  
  export { TaskManager };