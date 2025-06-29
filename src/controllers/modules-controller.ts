import { Request, Response } from "express";
import { knex } from "../database/knex";

class ModulesController {
  async index(req: Request, res: Response) {
    const modules = await knex("course_modules").select();

    res.status(200).json({ modules });
  }

  async indexById(req: Request, res: Response) {
    const { id } = req.params;

    const module = await knex("course_modules")
      .select()
      .where({ course_id: id });

    res.json(module);
  }

  async create(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;

    await knex("course_modules").insert({ name, course_id: id });

    res.status(201).json();
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;

    await knex("course_modules").update({ name }).where({ course_id: id });

    res.status(200).json();
  }

  async remove(req: Request, res: Response) {
    const { id } = req.params;

    await knex("course_modules").delete().where({ id });

    res.status(200).json();
  }
}

export { ModulesController };
