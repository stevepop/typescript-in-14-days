<template>
  <div>
    <h2>Task Manager</h2>
    <button @click="fetchTasks">Fetch Tasks</button>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }} - {{ task.completed ? 'Completed' : 'Not Completed' }}
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
    const tasks = ref<Task[]>([]);
    
    const fetchTasks = async () => {
      const response = await new Promise<Task[]>((resolve) => {
        setTimeout(() => {
          resolve([
            { id: 1, title: 'Learn TypeScript', completed: false },
            { id: 2, title: 'Build Task Manager', completed: true }
          ]);
        }, 1000);
      });
      tasks.value = response;
    };

    return {
      tasks,
      fetchTasks
    };
  }
});
</script>