import { Task } from './task';

// Common Basic Types:
// Number
let value = 42; // Initially a number
value.toFixed(2); 

// String
let color: string = "blue";
color = "red";

// Boolean
let isDone: boolean = false;

// Array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number];

// Enum
enum Color {Red, Green, Blue}

// Any
let notSure: any = 4;

// Object
let obj: object = { name: "John", age: 30 };

// Void
function warnUser(): void {
  console.log("This is a warning message!");
}

// Null and Undefined
let u: undefined = undefined;

// Basic Types Example
let taskTitle: string = 'Complete TypeScript tutorial';
let taskId: number = 1;
let isCompleted: boolean = false;

console.log(`Task: ${taskTitle} (ID: ${taskId}) - Completed? ${isCompleted}`);

// Using the Task Interface
let tasks: Task[] = [
    { id: 1, title: 'Learn TypeScript', completed: false },
    { id: 2, title: 'Build a Task Manager app', completed: false }
  ];
  
console.log(tasks);
