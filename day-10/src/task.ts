type TaskStatus = 'completed' | 'pending' | 'archived';

export class Task {
  id: number;
  title: string;
  completed: boolean;

  constructor(id: number, title: string, completed: boolean = false) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }

  toggleCompletion(): void {
    this.completed = !this.completed;
  }

  getDetails(): string {
    return `${this.title} | ${this.completed ? 'Completed' : 'Incomplete'}`;
  }
}
