type TaskStatus = 'completed' | 'pending' | 'archived';

interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

const tasks: Task[] = [
  { id: 1, title: 'Task 1', status: 'completed' },
  { id: 2, title: 'Task 2', status: 'pending' },
  { id: 3, title: 'Task 3', status: 'archived' },
];

type ReadOnlyTask = {
    readonly [K in keyof Task]: Task[K];
};
  
const readonlyTask: ReadOnlyTask = {
id: 1,
title: 'Read-only Task',
status: 'completed'
};

//readonlyTask.title = 'New Title'; // Error: Cannot assign to 'title' because it is a read-only property

function getTaskDetails(task: Task): string {
    switch (task.status) {
      case 'completed':
        return `${task.title} is completed.`;
      case 'pending':
        return `${task.title} is pending.`;
      case 'archived':
        return `${task.title} is archived.`;
      default:
        return `${task.title} has an unknown status.`;
    }
  }

//loop through the tasks
tasks.forEach(task => {
    console.log(getTaskDetails(task));
});