import { BASE_PATH, ENDPOINTS, VERSION } from "./configs.ts";
import { TaskController } from "./controllers/TaskController.ts";
import { Context, Router } from "./deps.ts";

const router = new Router();
const taskController = new TaskController();

const noop = (context: Context) => {
  context.response.status = 501;
};

const buildTaskUrl = () => `${BASE_PATH}${VERSION}${ENDPOINTS.Tasks}`;

router.get("/", (context: Context) => {
  context.response.body = {
    isAlive: true,
  };
});

router
  .get(buildTaskUrl(), taskController.getAll)
  .get(buildTaskUrl() + "/:id", noop)
  .post(buildTaskUrl(), taskController.create)
  .put(buildTaskUrl() + "/:id", taskController.update)
  .delete(buildTaskUrl() + "/:id", noop);

export default router;
