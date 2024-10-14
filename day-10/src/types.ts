interface Task {
    id: number;
    title?: string;
    completed: boolean;
}

type TaskWithoutCompletion = Omit<Task, 'completed'>;
