import { Context } from "../deps.ts";
import { TaskCreateDto } from "../models/Task.ts";
import { TaskService } from "../services/TaskService.ts";

export class TaskController {
  taskService: TaskService;

  constructor() {
    this.taskService = new TaskService();
  }

  async create(context: Context) {
    const { request, response } = context;

    if (!request.body()) {
      response.status = 400;
      response.body = {
        success: false,
        msg: "The request must have a body",
      };
      return;
    }

    const body: TaskCreateDto = await request.body().value;

    const task = this.taskService.create(body);

    response.status = 201;
    response.body = {
      data: task,
    };
  }
}
