<template>
    <div>
  <h2>Task Manager</h2>
  <input v-model="newTaskTitle" placeholder="Enter task title" />
  <button @click="addTask(newTaskTitle)">Add Task</button>
  <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  <ul>
    <li v-for="task in tasks" :key="task.id">
      {{ task.title }} - {{ task.completed ? 'Completed' : 'Not Completed' }}
      <button @click="toggleCompletion(task.id)">Toggle Completion</button>
    </li>
  </ul>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default defineComponent({
setup() {
  const tasks = ref<Task[]>([
    { id: 1, title: 'Learn TypeScript', completed: false },
    { id: 2, title: 'Build Task Manager', completed: true }
  ]);
  const newTaskTitle = ref<string>('');
  const errorMessage = ref<string>('');

  // Add a task only if the title is unique
  const addTask = (title: string) => {
    if (title.trim() === '') {
      errorMessage.value = 'Task title cannot be empty!';
      return;
    }

    const isDuplicate = tasks.value.some(task => task.title.toLowerCase() === title.toLowerCase());

    if (isDuplicate) {
      errorMessage.value = `Task with the title "${title}" already exists!`;
      return;
    }

    errorMessage.value = '';  // Clear any previous error messages

    tasks.value.push({
      id: tasks.value.length + 1,
      title: title.trim(),
      completed: false
    });

    newTaskTitle.value = '';  // Clear the input field after adding the task
  };

  const toggleCompletion = (id: number) => {
    const task = tasks.value.find(task => task.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  };

  return {
    tasks,
    newTaskTitle,
    errorMessage,
    addTask,
    toggleCompletion
  };
}
});
</script>

<style>
.error {
color: red;
}
</style>
