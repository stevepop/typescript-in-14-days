// Type Aliases
type TaskId = number | string;

let id1: TaskId = 123;
let id2: TaskId = 'task-456';


type FindTask = (id: TaskId) => Task | null;

const tasks: Task[] = [
  { id: 1, title: 'Buy Milk', completed: false },
  { id: 2, title: 'Meeting with Ali', completed: true },
  { id: 3, title: 'Prepare for presentation', completed: false },
];

const findTask: FindTask = (id) => {
  return tasks.find(task => task.id === id) || null;
};

// Optional Properties in Interfaces
interface Task {
  id: TaskId;
  title: string;
  completed: boolean;
  dueDate?: Date; // Optional property
}

let taskWithDueDate: Task = {
  id: tasks.length + 1,
  title: 'Submit assignment',
  completed: false,
  dueDate: new Date('2024-10-10')
};

let taskWithoutDueDate: Task = {
  id: tasks.length + 1,
  title: 'Study for exam',
  completed: true
};

// Applying Type Aliases and Interfaces to the Task Manager
function removeTask(id: TaskId): void {
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    console.log(`Task with id: ${id} has been removed.`);
  } else {
    console.log(`Task with id: ${id} not found.`);
  }
}

removeTask(1);

function addTask(title: string): Task {
  const newTask: Task = {
    id: tasks.length + 1,
    title,
    completed: false
  };
  tasks.push(newTask);
  return newTask;
}

addTask('Study TypeScript');
console.log(tasks);