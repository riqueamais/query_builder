import { Router } from "express";
import { ModulesController } from "../controllers/modules-controller";

const modulesRouter = Router();
const modulesController = new ModulesController();

modulesRouter.get("/", modulesController.index);
modulesRouter.get("/:id", modulesController.indexById);
modulesRouter.post("/:id", modulesController.create);
modulesRouter.put("/:id", modulesController.update);
modulesRouter.delete("/:id", modulesController.remove);

export { modulesRouter };
