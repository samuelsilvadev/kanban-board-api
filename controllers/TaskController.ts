import { RouterMiddleware } from "../deps.ts";
import { TaskCreateDto } from "../models/Task.ts";
import { TaskService } from "../services/TaskService.ts";

export class TaskController {
  taskService: TaskService;

  constructor() {
    this.taskService = new TaskService();
  }

  create: RouterMiddleware<string> = async (context) => {
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
  };

  update: RouterMiddleware<string> = async (context) => {
    const { request, response, params } = context;

    if (!params.id) {
      response.status = 400;
      response.body = {
        success: false,
        msg: "The request must have a id",
      };
      return;
    }

    if (!request.body()) {
      response.status = 400;
      response.body = {
        success: false,
        msg: "The request must have a body",
      };
      return;
    }

    const body: TaskCreateDto = await request.body().value;

    const task = this.taskService.update(params.id, body);

    response.status = 200;
    response.body = {
      data: task,
    };
  };

  getAll: RouterMiddleware<string> = (context) => {
    const { response } = context;

    const tasks = this.taskService.getAll();

    response.status = 200;
    response.body = {
      data: tasks,
    };
  };
}
