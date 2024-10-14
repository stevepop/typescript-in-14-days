// generate array of task objects
const tasks: Task[] = [
    { id: 1, title: 'Task 1', completed: true },
    { id: 2, title: 'Task 2', completed: false },
    { id: 3, title: 'Task 3', completed: false },
];

// Partial Utility Type
function updateTask(id: number, updates: Partial<Task>): Task {
  const task = { id, title: 'Default Title', completed: false }; // Example task
  return { ...task, ...updates };
}

const updatedTask = updateTask(1, { title: 'Updated Title' });
console.log(updatedTask); 

// Required Utility Type
const task: Required<Task> = { id: 4, title: 'Complete project', completed: true };
console.log(task);

// Readonly Utility Type
const readOnlyTask: Readonly<Task> = { id: 5, title: 'Read-only Task', completed: false };
//readOnlyTask.title = 'New Title';  // Error: Cannot assign to 'title' because it is a read-only property
console.log(readOnlyTask);

// Pick Utility Type
type TaskOverview = Pick<Task, 'id' | 'title'>;
const taskOverview: TaskOverview = { id: 6, title: 'Complete project' };
console.log(taskOverview);

// Omit Utility Type
const incompleteTask: TaskWithoutCompletion = { id: 7, title: 'New Task' };
console.log(incompleteTask);