import { read } from "../database/handler.ts";
import { Task, TaskCreateDto } from "../models/Task.ts";

export class TaskService {
  tasks: Task[] = [];

  constructor() {
    this.tasks = read().tasks;
  }

  create(task: TaskCreateDto) {
    const newTask = new Task(task);

    this.tasks.push(newTask);

    return newTask;
  }

  update(id: string, task: TaskCreateDto) {
    const index = this.tasks.findIndex((task) => task.id === id);
    const previousTask = this.tasks[index];
    const newTask = {
      ...previousTask,
      ...task,
    };

    this.tasks[index] = newTask;

    return newTask;
  }

  getAll() {
    return this.tasks;
  }
}
