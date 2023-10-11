import { expect } from "../deps.ts";
import { Task } from "./Task.ts";

Deno.test("should create a task", () => {
  const task = new Task({
    title: "mock title",
    description: "mock description",
    status: "OPEN",
  });

  expect(task.id).toBeTypeOf("string");
  expect(task.title).toBe("mock title");
  expect(task.description).toBe("mock description");
  expect(task.status).toBe("OPEN");
});
