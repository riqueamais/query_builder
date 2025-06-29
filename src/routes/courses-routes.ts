import { Router } from "express";
import { CoursesController } from "../controllers/courses-controller";

const coursesRouter = Router();
const coursesController = new CoursesController();

coursesRouter.get("/", coursesController.index);
coursesRouter.get("/:id", coursesController.indexById);
coursesRouter.post("/", coursesController.create);
coursesRouter.put("/:id", coursesController.update);
coursesRouter.delete("/:id", coursesController.remove);

export { coursesRouter };
