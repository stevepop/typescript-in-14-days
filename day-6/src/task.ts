class Task {
    private static idCounter = 0;
    private id: number;
    private _title: string;
    private completed: boolean;
    dueDate?: Date;
  
    constructor(title: string, dueDate?: Date) {
      Task.idCounter++;
      this.id = Task.idCounter;
      this._title = title;
      this.completed = false;
      this.dueDate = dueDate;
    }
  
    // Getter for title
    get title(): string {
      return this._title;
    }
  
    // Setter for title with validation
    set title(newTitle: string) {
      if (newTitle.length > 0) {
        this._title = newTitle;
      } else {
        console.log('Title cannot be empty.');
      }
    }
  
    toggleCompletion(): void {
      this.completed = !this.completed;
    }
  
    getDetails(): string {
      return `Task: ${this.title} | Status: ${this.completed ? 'Completed' : 'Incomplete'}`;
    }
  }
  
  export { Task };