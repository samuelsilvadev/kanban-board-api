import { expect, superoak } from "./deps.ts";
import { app } from "./server.ts";

Deno.test("should return correct response from the root path", async () => {
  const request = await superoak(app);
  const response = await request.get("/");

  expect(response.status).toEqual(200);
  expect(response.body).toEqual({ isAlive: true });
});
