import { BASE_PATH, ENDPOINTS, VERSION } from "./configs.js";
import { Context, Router } from "./deps.ts";

const router = new Router();

const noop = () => {};

const buildTaskUrl = () => `${BASE_PATH}${VERSION}${ENDPOINTS.Tasks}`;

router.get("/", (context: Context) => {
  context.response.body = {
    isAlive: true,
  };
});

router.get(buildTaskUrl(), noop)
  .get(buildTaskUrl() + "/:id", noop)
  .post(buildTaskUrl(), noop)
  .put(buildTaskUrl() + "/:id", noop)
  .delete(buildTaskUrl() + "/:id", noop);

export default router;
