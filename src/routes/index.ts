import { Router } from "express";
import { coursesRouter } from "./courses-routes";
import { modulesRouter } from "./modules-routes";

const routes = Router();

routes.use("/courses", coursesRouter);
routes.use('/modules', modulesRouter)

export { routes };
