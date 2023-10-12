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
}
